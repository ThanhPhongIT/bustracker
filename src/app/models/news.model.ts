import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class News {

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
                id: 'Title',
                name: 'Tiêu đề',
                width: 300,
                type: 'text',
            },
            {
                id: 'URLLink',
                name: 'Link',
                width: 200,
                type: 'text',
            },
            {
                id: 'CreatedByName',
                name: 'Người tạo',
                width: 200,
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
    public get collums_noDelete(): Array<CollumsModel> {
        return [
            // {
            //     id: 'checkbox',
            //     name: '',
            //     width: 50,
            //     type: 'checkbox'
            // },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'Title',
                name: 'Tiêu đề',
                width: 300,
                type: 'text',
            },
            {
                id: 'URLLink',
                name: 'Link',
                width: 200,
                type: 'text',
            },
            {
                id: 'CreatedByName',
                name: 'Người tạo',
                width: 200,
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
    public get collums_noAction(): Array<CollumsModel> {
        return [
            // {
            //     id: 'checkbox',
            //     name: '',
            //     width: 50,
            //     type: 'checkbox'
            // },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'Title',
                name: 'Tiêu đề',
                width: 300,
                type: 'text',
            },
            {
                id: 'URLLink',
                name: 'Link',
                width: 200,
                type: 'text',
            },
            {
                id: 'CreatedByName',
                name: 'Người tạo',
                width: 200,
                type: 'text',
            }
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
     public get btnActice_noAdd(): Array<any> {
        return [
            // {
            //     class: 'btn-create',
            //     text: '+  Thêm',
            //     type: 'create',
            //     icon: ''
            // }
        ];
    }

}