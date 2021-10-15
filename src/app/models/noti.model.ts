import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class Notification {

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
                name: 'Thông báo',
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
                id: 'Content',
                name: 'Thông báo',
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
                id: '',
                name: '',
                width: 200,
                type: 'setting',
                data: [
                    {
                        type: 'edit',
                        text: 'Sửa',
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
                id: 'Content',
                name: 'Thông báo',
                width: 300,
                type: 'text',
            },
            {
                id: 'CreatedOn',
                name: 'Tạo lúc',
                width: 200,
                type: 'date',
            },
            // {
            //     id: '',
            //     name: '',
            //     width: 200,
            //     type: 'setting',
            //     data: [
            //         {
            //             type: 'edit',
            //             text: 'Sửa',
            //             class: 'btn-edit'
            //         },
            //         {
            //             type: 'delete',
            //             text: 'Xoá',
            //             class: 'btn-delete'
            //         }
            //     ]
            // },
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
            {
                class: 'btn-noti',
                text: 'Thông báo hệ thống',
                type: 'noti',
                icon: 'assets/svg/icon-noti-system.svg'
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
            // },
            {
                class: 'btn-noti',
                text: 'Thông báo hệ thống',
                type: 'noti',
                icon: 'assets/svg/icon-noti-system.svg'
            }
        ];
    }
    public get btnActice_noGetNoti(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'create',
                icon: ''
            },
            // {
            //     class: 'btn-noti',
            //     text: 'Thông báo hệ thống',
            //     type: 'noti',
            //     icon: 'assets/svg/icon-noti-system.svg'
            // }
        ];
    }
    public get btnActice_none(): Array<any> {
        return [
            // {
            //     class: 'btn-create',
            //     text: '+  Thêm',
            //     type: 'create',
            //     icon: ''
            // },
            // {
            //     class: 'btn-noti',
            //     text: 'Thông báo hệ thống',
            //     type: 'noti',
            //     icon: 'assets/svg/icon-noti-system.svg'
            // }
        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'Title',
                label: 'Tiêu đề',
                name: 'Title',
                type: 'text',
                required: true,
                obligatory: true,
            },
            {
                id: 'Content',
                label: 'Nội dung',
                name: 'Content',
                type: 'textarea',
                required: true,
                obligatory: true,
            }
        ];
    }
    public get detailNoti(): Array<CreateModel> {
        return [
            {
                id: 'Title',
                label: 'Tiêu đề',
                name: 'Title',
                type: 'text',
                required: true,
            },
            {
                id: 'Content',
                label: 'Nội dung',
                name: 'Content',
                type: 'textarea',
                required: true,
            }
        ];
    }
}
export interface CreateNoti {
   Title: string;
   Content: string;
}