import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { TeamState } from "../../Team.Data/Team.State/team.reducer";
import { selectEditingTeam, selectTeamList } from "../../Team.Data/Team.State/team.selectors";
import { TeamMember } from "../../Team.Domain/Team.Models/Team";
import { deleteTeamMember, getTeamMember, getTeamsList, restoreTeamMember, saveTeamMember, updateTeamMember } from "../../Team.Data/Team.State/team.actions";
import { settingsState } from "src/app/Modules/Settings/Settings.Data/Settings.State/settings.reducer";
import { selectSettings } from "src/app/Modules/Settings/Settings.Data/Settings.State/settings.selectors";
import { getFontSettings } from "src/app/Modules/Settings/Settings.Data/Settings.State/settings.actions";

@Injectable({providedIn:"root"})
export class TeamViewModel {

    readonly teamList$ = this.store.select(selectTeamList);
    readonly editingTeam$ = this.store.select(selectEditingTeam);
    readonly settings$ = this.store.select(selectSettings);

    constructor(
        private store: Store<TeamState>,
    ) { 

    }

    getSettings() {
        this.store.dispatch(getFontSettings());

    }

    getTeamById(id: number) {
        this.store.dispatch(getTeamMember({ id: id }))
    }


    getTeamList() {
        this.store.dispatch(getTeamsList());
    }

    saveTeam(team: TeamMember) {
        this.store.dispatch(saveTeamMember({ teamMember: team }));
    }


    updateTeam(team: TeamMember) {
        this.store.dispatch(updateTeamMember({ teamMember: team }));

    }

    deleteTeamMemeber(id: number) {
        this.store.dispatch(deleteTeamMember({ teamMemberId:id }));

    }

    restoreTeamMemeber(id: number) {
        this.store.dispatch(restoreTeamMember({ teamMemberId:id }));

    }




}  