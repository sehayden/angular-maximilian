export class LogginService{
    logStatusChange(status: string){
        console.log('A server status change, new status: ' + status);
    }
}