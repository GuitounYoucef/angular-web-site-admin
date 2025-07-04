import { Injectable } from "@angular/core";
import { IStatisticsRepository } from "../../Statistics.Domain/Statistics.IRepository/IStatisticsRepository";
import { Observable, map } from "rxjs";
import { VisiteNumber } from "../../Statistics.Domain/Satistics.Models/VisiteNumber";
import { environment } from "src/environements/environement";
import { HttpService } from "src/app/Modules/Core/API/HttpService";
import { HttpRequestMethod } from "src/app/Modules/Core/API/HttpRequestMethod";
import { SuccessApiResponse } from "src/app/Modules/Core/API/ApiResponse";

@Injectable()
export class StatisticsRepository extends IStatisticsRepository {

    constructor(private httpService: HttpService,
    ) {
        super();
    }

    getVisiteNumber(): Observable<VisiteNumber> {
        const requestURL = `${environment.apiURL}/website-visite`;
        const options = this.httpService.createOptions(
            HttpRequestMethod.get,
      //      this.httpService.createHeader(),
            requestURL,
            null,
            false
        );
        return this.httpService.execute(options).pipe(
            map((item) => {
                let res = item as SuccessApiResponse<VisiteNumber>;
                return res.results;
            })
        );

    }
}