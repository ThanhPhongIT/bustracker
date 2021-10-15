import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class AbsenceModel {

    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'StudentName',
                name: 'Họ tên',
                width: 300,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 50,
                type: 'text',
            },
            {
                id: 'FromDate',
                name: 'Bắt đầu',
                width: 150,
                type: 'date',
            },
            {
                id: 'ToDate',
                name: 'Kết thúc',
                width: 150,
                type: 'date',
            },
            {
                id: 'Description',
                name: 'Nội dung đơn',
                width: 350,
                type: 'text',
            },
            {
                id: 'Information',
                name: 'Thông tin đơn',
                width: 350,
                type: 'free-text',
            },
            {
                id: '',
                name: '',
                width: 250,
                type: 'absence',
                data: [
                ]
            },
            {
                id: '',
                name: '',
                width: 80,
                type: 'absence_detail',
                data: [
                ]
            },
        ];
    }
    public get collums_noAction(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'StudentName',
                name: 'Họ tên',
                width: 300,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 50,
                type: 'text',
            },
            {
                id: 'FromDate',
                name: 'Bắt đầu',
                width: 150,
                type: 'date',
            },
            {
                id: 'ToDate',
                name: 'Kết thúc',
                width: 150,
                type: 'date',
            },
            {
                id: 'Description',
                name: 'Nội dung đơn',
                width: 350,
                type: 'text',
            },
            {
                id: 'Information',
                name: 'Thông tin đơn',
                width: 350,
                type: 'free-text',
            },
            // {
            //     id: '',
            //     name: '',
            //     width: 250,
            //     type: 'absence',
            //     data: [
            //     ]
            // },
            {
                id: '',
                name: '',
                width: 80,
                type: 'absence_detail',
                data: [
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