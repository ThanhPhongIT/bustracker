import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class Feedback {

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'Title',
                name: 'Tiêu đề phản hồi',
                width: 300,
                type: 'text',
            },
            {
                id: 'CreatedOn',
                name: 'Tạo lúc',
                width: 200,
                type: 'date',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 50,
                type: 'text',
            },
            {
                id: 'StudentName',
                name: 'Người tạo',
                width: 150,
                type: 'text',
            },
            {
                id: 'StatusString',
                name: 'Trạng thái',
                width: 150,
                type: 'boolean',
            },
            {
                id: '',
                name: '',
                width: 150,
                type: 'setting',
                data: [
                    {
                        type: 'detail',
                        text: 'Chi tiết',
                        class: 'btn-edit'
                    },
                    // {
                    //     type: 'delete',
                    //     text: 'Xoá',
                    //     class: 'btn-delete'
                    // }
                ]
            },
        ];
    }

}