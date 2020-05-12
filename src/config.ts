// const NETWORK = 'mainnet';
const NETWORK = 'ropsten';

// access to Infura ethereum node
const RPC_URL: string = 'https://' + NETWORK + '.infura.io/v3/066eeeca9925471f9db758dc3af48442';

const TORNADO_PBTC_INSTANCES_ADDRESSES = {
    // pBTC instance addresses on Ropsten testnet
    ropsten: {
        0.001: '0x015FCC024FB65bB6Fc38aC390f23af6Eb18Fb740',
        0.01: '0x321096FBacae6eD16DB070CE35D131Eb648FC5df',
        0.1: '0xfccf26b45521b588F0Fb1373984898705eC6da95',
        1: '0x96C39150A554a5eA4599f777D1Da05A32B0FB8a4',
        10: '0x3187afde73418f84802a7AB02d762aa82A30C83C',
        100: '0x3c1282e0B40098Bea2C8ba12d7c67a46af8A98bb',
    },
};

// BTC deposit amount options which show up in th UI
const DEPOSIT_AMOUNTS: number[] = Object.keys(TORNADO_PBTC_INSTANCES_ADDRESSES[NETWORK]).map(Number);

const PTOKEN_ADDRESS = {
    ropsten: '0xEB770B1883Dcce11781649E8c4F1ac5F4B40C978',
    mainnet: '0x5228a22e72ccC52d415EcFd199F99D0665E7733b',
};

export { RPC_URL, DEPOSIT_AMOUNTS, TORNADO_PBTC_INSTANCES_ADDRESSES, PTOKEN_ADDRESS };
