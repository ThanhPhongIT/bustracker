import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class SettingModel {

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'checkbox',
                name: '',
                width: 50,
                type: 'checkbox'
            },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'Name',
                name: 'Nhóm quyền',
                width: 300,
                type: 'text',
            },
            {
                id: 'UserprofileCount',
                name: 'Số thành viên',
                width: 100,
                type: 'text',
            },
            {
                id: '',
                name: '',
                width: 200,
                type: 'setting',
                data: [{
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
            }
        ];
    }
    public get collumsSchoolYear(): Array<CollumsModel> {
        return [
            {
                id: 'checkbox',
                name: '',
                width: 50,
                type: 'checkbox'
            },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'Name',
                name: 'Niên khóa',
                width: 300,
                type: 'text',
            },
            {
                id: 'Semester1',
                name: 'Học kỳ I',
                width: 150,
                type: 'text',
            },
            {
                id: 'Semester2',
                name: 'Học kỳ II',
                width: 150,
                type: 'text',
            },
            {
                id: '',
                name: '',
                width: 200,
                type: 'setting',
                data: [{
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

}