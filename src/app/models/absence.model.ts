import {CollumsModel} from './base/collums.model';

export class AbsenceModel {

  public get collums(): Array<CollumsModel> {
    return [
      // {
      //   id: 'stt',
      //   name: 'STT',
      //   width: 50,
      //   type: 'text',
      // },
      {
        id: 'StudentName',
        name: 'Họ và tên',
        width: 250,
        type: 'text',
      },
      {
        id: 'DOB',
        name: 'Ngày sinh',
        width: 250,
        type: 'DOB',
      },
      {
        id: 'ClassName',
        name: 'Lớp',
        width: 150,
        type: 'text',
      },
      {
        id: 'BusName',
        name: 'Tên xe',
        width: 250,
        type: 'text',
      },
      {
        id: 'StopName',
        name: 'Điểm đón',
        width: 350,
        type: 'text',
      },
      {
        id: 'ParentPhone',
        name: 'SĐT phụ huynh',
        width: 250,
        type: 'text',
      }
    ];
  }
}
