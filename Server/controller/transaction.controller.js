const { db } = require("../config/database.config");
const Transaction = require("../model/transaction.model");
const Wallet = require("../model/wallet.model");

const getTransactions = async (req, res) => {
    const { userId } = req.user;
    try {
        const transaction = await Transaction.findAll({
            where: { userId },
            order: [
                ['createdAt', 'DESC']]
        });
        if (!transaction) {
            return res.json({ data: [], message: 'Transactions got successfully!' });
        }
        return res.json({ data: transaction, message: 'Transactions got successfully!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal server error! please try again');
    }
};

const paymentWebhook = async (req, res) => {
    const t = await db.transaction();
    try {

        let result = req.body
        let event = result.event
        let type = result.type
        let clientId = +result.clientId
        let checkoutId = result.checkoutId
        let checkoutTime = result.checkoutTime
        let amount = result.payload.payment.amount
        let status = result.payload.payment.status

        if (!clientId) {
            return res.status(500).send('Client ID is mandatory');
        }
        if (event === 'confirmed' && type === 'payment' && status === 'Success') {
            let userWallet = await Wallet.findOne({ where: { userId: clientId } }, { transaction: t })

            if (!userWallet) return res.status(500).send('Wallet not found');

            console.log(userWallet.amount, "balance");
            console.log(amount, "amount");

            console.log((+userWallet.amount + amount).toString());

            await Wallet.update(
                { amount: +userWallet.amount + amount },
                {
                    where: { id: userWallet.id },
                    returning: true,
                    transaction: t
                }
            )

            await Transaction.create({
                userId: clientId,
                amount,
                status: event,
                checkoutId,
                initiatedAt: checkoutTime
            }, { transaction: t })

            await t.commit()
            return res.status(200).json({
                data: null,
                message: 'Webhook triggered successfully!'
            })

        } else {
            await Transaction.create({
                userId: clientId,
                amount,
                status: event,
                checkoutId,
                initiatedAt: checkoutTime
            }, { transaction: t })

            t.commit()
            return res.status(200).json({
                data: null,
                message: 'Webhook triggered successfully!'
            })
        }
    } catch (error) {
        await t.rollback()
        console.log(error.message);
        res.status(500).send('Internal server error! please try again');
    }
};

module.exports = {
    getTransactions,
    paymentWebhook
}