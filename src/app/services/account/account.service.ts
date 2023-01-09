export class AccountService{
    accounts = [
        {
            name: 'Cyno', 
            status: 'master'
        },
        {
            name: 'Al Haitham',
            status: 'intermediate'
        },
        {
            name: 'Aether',
            status: 'proficient'
        },
        {
            name: 'Albedo',
            status: 'beginner'
        }
    ]
    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status})
    }
    updateStatus(id: number, status: string){
        this.accounts[id].status = status
    }
}