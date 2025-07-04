import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState } from "../../User.Data/User.State/user.reducer";
import { selectCurrentUser, selectUserList } from "../../User.Data/User.State/user.selectors";
import { User } from "../../User.Domain/User.Models/User";
import { getUser, getUsersList, saveUser, updateUser } from "../../User.Data/User.State/user.actions";

@Injectable({providedIn:"root"})
export class UserViewModel {

    readonly userList$ = this.store.select(selectUserList);
    readonly currentUser$ = this.store.select(selectCurrentUser);

    constructor(
        private store: Store<UserState>,
    ) { }



    getUserById(id: number) {
        this.store.dispatch(getUser({ id: id }))
    }


    getUserList() {
        this.store.dispatch(getUsersList());
    }

    saveUser(user: User) {
        this.store.dispatch(saveUser({ user: user }));
    }


    updateUser(user: User) {
        this.store.dispatch(updateUser({ user: user }));

    }




}  