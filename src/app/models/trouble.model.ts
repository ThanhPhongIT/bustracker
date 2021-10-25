import { CollumsModel } from './base/collums.model';

export class TroubleModel {
  public get collums(): Array<CollumsModel> {
    return [
      {
        id: 'stt',
        name: 'Stt',
        width: 50,
        type: 'stt',
      },
      {
        id: 'Description',
        name: 'Nội dung',
        width: 200,
        type: 'text',
      },
      {
        id: 'CreatedOn',
        name: 'Tạo lúc',
        width: 100,
        type: 'date',
      },

      {
        id: 'CreatedBy',
        name: 'Người tạo',
        width: 150,
        type: 'text',
      },
      {
        id: 'StudentsList',
        name: 'HS liên quan',
        width: 200,
        type: 'group',
      },
    ];
  }
}
