import { CreateModel } from "./base/create.model";

export class ScheduleModel {
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'date',
                label: 'Ngày áp dụng',
                name: 'title',
                type: 'date'
            },
            {
                id: 'file',
                label: 'File',
                name: 'file',
                type: 'upload'
            }
        ];
    }

}