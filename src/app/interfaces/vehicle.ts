import { Owner } from 'src/app/interfaces/owner';
import { Driver } from 'src/app/interfaces/driver';
import { kindVehicles } from './kindVehicles';
export interface Vehicle{
    id?: number;
    plate: string;
    color: string;
    mark: string;
    owner_id: Owner[];
    driver_id: Driver[];
    kind_vehicle_id: kindVehicles[];
    create_at?: string;
    update_at?: string;
}