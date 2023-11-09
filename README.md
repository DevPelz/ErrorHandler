# DisplayData Smart Contract

This Ethereum smart contract, named `DisplayData`, is a simple example that allows an owner to change a numerical value and view it. The smart contract is written in Solidity.

## Functions

1. **changeNumber(uint \_value):**

   - Changes the numerical value stored in the contract.
   - Only the owner can call this function.

2. **viewNumber():**
   - Returns the current numerical value stored in the contract.

## Deployed Contract

The smart contract is deployed on the Ethereum blockchain.

# Frontend with Next.js

The project includes a frontend built with Next.js to interact with the `DisplayData` smart contract.

## Getting Started

To run the frontend locally, follow these steps:

1. **Navigate to the `frontend` directory:**

```bash
   cd frontend
```

### Install Dependencies:

```bash
npm install
```

### Start the Development Server:

```bash
yarn dev
```

### Access the Application:

- Open your web browser and visit http://localhost:3000.
