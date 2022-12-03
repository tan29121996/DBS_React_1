import { useState } from 'react';
import Transaction from './Transaction';

function Transactions() {
    const transactions = [{
        TransactionID: 1,
        AccountID: 621156213,
        ReceivingAccountID: 339657462,
        Date: "2022-11-08T04:00:00.000Z",
        TransactionAmount: 500.00,
        Comment: "Monthly Pocket Money"
    },
    {
        TransactionID: 1,
        AccountID: 621156213,
        ReceivingAccountID: 339657462,
        Date: "2022-11-08T04:00:00.000Z",
        TransactionAmount: 500.00,
        Comment: "Monthly Pocket Money"
    },
];
    
    return (
    <div style={{ display: 'flex', width: '100%', height: '100%', borderTopLeftRadius: 20,  borderTopRightRadius: 20, background: '#ec1d25' }}>
        <div style={{        
            width: '100%', height: 50, 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            color: 'white' }}
        >
                <div style={{ display: 'flex', alignItems: 'center', width: '10%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>TransactionID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>AccountID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>ReceivingAccountID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>TransactionID</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height:'90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>Date</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%', borderRight: '2px solid rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ width: '100%', height: 30 }}>TransactionAmount</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '15%', height: '90%' }}>
                    <div style={{ width: '100%', height: 30 }}>Comment</div>
                </div>
        </div>
        <div style={{ position: 'absolute', top: 50, width: '100%', height: '100%', overflowY: 'scroll'}}>
            {transactions.map((transaction) => (
                <div key={transaction.TransactionID}>
                    <Transaction transaction={transaction} />
                </div>
            ))}
        </div>
    </div>
    );
}

export default Transactions;
