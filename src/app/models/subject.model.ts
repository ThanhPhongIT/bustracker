import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class SubjectModel {

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'SubjectName',
                name: 'Tên',
                width: 200,
                type: 'text',
            },
            {
                id: 'Count',
                name: 'Số giáo viên',
                width: 100,
                type: 'text',
            },
           
            {
                id: '',
                name: '',
                width: 150,
                type: 'setting',
                data: [
                    {
                        type: 'edit',
                        text: 'Sửa',
                        class: 'btn-edit'
                    },
                    {
                        type: 'delete',
                        text: 'Xoá',
                        class: 'btn-delete'
                    }
                ]
            },
        ];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'create',
                icon: ''
            },
        ];
    }

}