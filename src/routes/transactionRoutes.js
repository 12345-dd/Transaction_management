const router = require("express").Router();

const transactionController = require("../controllers/transactionController");

router.post("/transactions",transactionController.createTransaction);

router.get("/transactions",transactionController.getAllTransactionOfUser);

router.put("/transactions/:id",transactionController.updateTransaction);

router.get("/transactions/:id",transactionController.getTransactionById);

module.exports = router;