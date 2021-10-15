import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";

export class DocumentModel {


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
                name: 'Tên tài liệu',
                width: 200,
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
                type: 'document',
                data: [
                    {
                        type: 'download',
                        text: 'Tải xuống',
                        class: 'btn-edit'
                    },
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
            }
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
                name: 'Tên tài liệu',
                width: 200,
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
            //     type: 'document',
                
            // },
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
                name: 'Tên tài liệu',
                width: 200,
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
                type: 'document',
                data: [
                    {
                        type: 'download',
                        text: 'Tải xuống',
                        class: 'btn-edit'
                    },
                    {
                        type: 'edit',
                        text: 'Sửa',
                        class: 'btn-edit'
                    }
                ]
            }
        ];
    }
    public get btnActice(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'menu',
                icon: ''
            },
            {
                class: 'btn-noti',
                text: 'Thêm kết quả học tập',
                type: 'result',
                icon: 'assets/svg/icon-upload.svg'
            }
        ];
    }
    public get btnActice_noAdd(): Array<any> {
        return [
            // {
            //     class: 'btn-create',
            //     text: '+  Thêm',
            //     type: 'menu',
            //     icon: ''
            // },
            {
                class: 'btn-noti',
                text: 'Thêm kết quả học tập',
                type: 'result',
                icon: 'assets/svg/icon-upload.svg'
            }
        ];
    }
    public get btnActice_noHandle(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'menu_noHand',
                icon: '',
            },
            {
                class: 'btn-noti',
                text: 'Thêm kết quả học tập',
                type: 'result',
                icon: 'assets/svg/icon-upload.svg'
            }
        ];
    }
    public get collumsTestResult(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'StudentName',
                name: 'Họ và tên',
                width: 200,
                type: 'text',
            },
            {
                id: 'GenderString',
                name: 'Giới tính',
                width: 200,
                type: 'text',
            },
            {
                id: 'StudentCode',
                name: 'Mã học sinh',
                width: 200,
                type: 'text',
            },
            {
                id: 'ListMedia',
                name: 'file upload',
                width: 300,
                type: 'list',
                data: []
            },
            
        ];
    }
    public get btnActiceResult(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'create',
                icon: ''
            }
        ];
    }

    public get create(): Array<CreateModel> {
        return [
            {
                id: 'Title',
                label: 'Tên tài liệu',
                name: 'Title',
                type: 'text'
            },
            {
                id: 'file',
                label: 'File',
                name: 'file',
                type: 'upload'
            }
        ];
    }

    public get createTestResult(): Array<CreateModel> {
        return [
            {
                id: 'Title',
                label: 'Tên tài liệu',
                name: 'Title',
                type: 'text'
            },
            {
                id: 'StudentId',
                label: 'Tên học sinh',
                name: 'Title',
                type: 'selected'
            },
            {
                id: 'file',
                label: 'File',
                name: 'file',
                type: 'upload'
            }
        ];
    }

    public get createHomeWork(): Array<CreateModel> {
        return [
            {
                id: 'Title',
                label: 'Tên tài liệu',
                name: 'Title',
                type: 'text'
            },
            {
                id: 'Description',
                label: 'Nội dung',
                name: 'text',
                type: 'textarea'
            }
        ];
    }
}