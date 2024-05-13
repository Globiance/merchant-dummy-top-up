const Transaction = require("../model/transaction.model");

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

module.exports = {
    getTransactions
}