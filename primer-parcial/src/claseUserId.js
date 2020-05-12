 class UserId {
    constructor(){
      this._UserId = [];
    }
    addUserId(lista) {
      if(!this._UserId.includes(this._UserId.find(r => r.id === lista.userId))) {
        const userIds = {"userId":this._UserId.length + 1, "id": lista.userId }
        this._UserId.push(userIds)
      } 
      return this;
    }
    getUserId() { return this._UserId}
}
export default UserId;