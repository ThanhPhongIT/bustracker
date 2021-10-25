import { CollumsModel } from './base/collums.model';

export class MemberModel {
  public get collums(): Array<CollumsModel> {
    return [
      {
        id: 'stt',
        name: 'STT',
        width: 50,
        type: 'stt',
      },
      {
        id: 'StudentName',
        name: 'Họ và tên',
        width: 200,
        type: 'text',
      },
      {
        id: 'DOB',
        name: 'Ngày sinh',
        width: 100,
        type: 'DOB',
      },

      {
        id: 'DepartBus',
        name: 'Xe đón',
        width: 150,
        type: 'text',
      },
      {
        id: 'DepartStop',
        name: 'Điểm đón',
        width: 200,
        type: 'text',
      },
      {
        id: 'ReturnBus',
        name: 'Xe trả',
        width: 150,
        type: 'text',
      },
      {
        id: 'ReturnStop',
        name: 'Điểm trả',
        width: 200,
        type: 'text',
      },
    ];
  }
}
