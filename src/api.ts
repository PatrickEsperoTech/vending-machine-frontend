const AUTHORIZATION = 'Basic YnV5ZXIxOjEyMzQ=';

export const fetchProducts = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:8080/products", {
            headers: {
                "Authorization": AUTHORIZATION
            }
        })
            .then(response => {
                response.json()
                    .then(products => {
                        resolve(products);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const getDeposit = async (): Promise<number> => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/users/buyer1', {
            method: 'GET',
            headers: {
                "Authorization": AUTHORIZATION,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                result.json()
                    .then(user => {
                        resolve(user.deposit);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const postDeposit = async (amount: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/deposit', {
            method: 'POST',
            headers: {
                "Authorization": AUTHORIZATION,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount })
        })
            .then(result => {
                result.json()
                    .then(amount => {
                        resolve(amount.newDeposit);
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const buy = (productId: number, amount: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/buy', {
            method: 'POST',
            headers: {
                "Authorization": AUTHORIZATION,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productId,
                amount
            })
        })
            .then(result => {
                result.json()
                    .then(buy => {
                        if (result.ok) {
                            resolve(buy);
                        } else {
                            reject(buy);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    })
            })
            .catch(err => {
                reject(err);
            })
    })
}