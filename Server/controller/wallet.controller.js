const Wallet = require("../model/wallet.model");

const readBalance = async (req, res) => {
    const { userId } = req.user; 
    try {
        const wallet = await Wallet.findOne({ where: { userId } });
        if (!wallet) {
            return res.status(404).send('Wallet not found');
        }
        return res.json({ data: { balance: wallet.amount }, message: 'Wallet got successfully!' });
    } catch (error) {
        res.status(500).send('Internal server error! please try again');
    }
};

const updateBalance = async (userId, amount) => {
    try {
        const wallet = await Wallet.findOne({ where: { userId } });
        if (!wallet) {
            return res.status(404).send('Wallet not found');
        }
        wallet.amount = amount;
        await wallet.save();
        return 'Balance updated successfully';
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    readBalance,
    updateBalance
};
