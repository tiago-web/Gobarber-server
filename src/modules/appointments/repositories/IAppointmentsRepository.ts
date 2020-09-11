import Appointment from "../infra/typeorm/entities/Appointment";
import ICreateAppointmentDTO from "../dtos/ICreateAppointmentDTO";
import IFindAllInDayFromProviderDTO from "../dtos/IFindAllInDayFromProviderDTO";
import IFindAllInMonthFromProviderDTO from "../dtos/IFindAllInMonthFromProviderDTO";

export default interface IAppointmentsRepository {
	create(data: ICreateAppointmentDTO): Promise<Appointment>;
	findByDate(date: Date): Promise<Appointment | undefined>;
	findAllInMonthFromProvider(
		date: IFindAllInMonthFromProviderDTO
	): Promise<Appointment[]>;
	findAllInDayFromProvider(
		data: IFindAllInDayFromProviderDTO
	): Promise<Appointment[]>;
}
