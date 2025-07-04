import { Observable } from "rxjs";
import { VisiteNumber } from "../Satistics.Models/VisiteNumber";

export abstract class IStatisticsRepository {
    abstract getVisiteNumber(): Observable<VisiteNumber>;
}