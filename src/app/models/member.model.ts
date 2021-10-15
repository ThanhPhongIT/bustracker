import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class MemberModel {


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
                type: 'text'
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 200,
                type: 'text',
            },
            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'DOB',
            },

            {
                id: 'GenderString',
                name: 'Giới tính',
                width: 50,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 100,
                type: 'text',
            },
            {
                id: 'StudentCode',
                name: 'Mã HS',
                width: 100,
                type: 'text',
            },
            {
                id: 'ParentPhone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    {
                      type: 'delete',
                      text:'Xoá',
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
                type: 'text'
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 200,
                type: 'text',
            },
            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'DOB',
            },

            {
                id: 'GenderString',
                name: 'Giới tính',
                width: 50,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 100,
                type: 'text',
            },
            {
                id: 'StudentCode',
                name: 'Mã HS',
                width: 100,
                type: 'text',
            },
            {
                id: 'ParentPhone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    //   type: 'delete',
                    //   text:'Xoá',
                    //   class: 'btn-delete'  
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
                type: 'text'
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 200,
                type: 'text',
            },
            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'DOB',
            },

            {
                id: 'GenderString',
                name: 'Giới tính',
                width: 50,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 100,
                type: 'text',
            },
            {
                id: 'StudentCode',
                name: 'Mã HS',
                width: 100,
                type: 'text',
            },
            {
                id: 'ParentPhone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
            }

        ];
    }
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'StudentLastName',
                label: 'Họ và tên học sinh',
                name: 'StudentLastName',
                type: 'text',
                required: true,
                obligatory: true,
            },
            {
                id: 'StudentPhone',
                label: 'SĐT học sinh',
                name: 'StudentPhone',
                type: 'text',
            },
            {
                id: 'LastName',
                label: 'Họ và tên phụ huynh',
                name: 'LastName',
                type: 'text',
            },
            {
                id: 'Phone',
                label: 'Tên đăng nhập',
                name: 'phone',
                type: 'text',
                required: true,
                obligatory: true,
            },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date',
            },
            {
                id: 'StudentGender',
                label: 'Giới tính',
                name: 'StudentGender',
                type: 'selected',
                data: [
                    {
                        value: 1,
                        name: "Nam"
                    },
                    {
                        value: 2,
                        name: "Nữ"
                    }
                ]
            },
            {
                id: 'ClassId',
                label: 'Lớp',
                name: 'ClassId',
                type: 'disableSelected',
                data: []
            }, {
                id: 'StudentCode',
                label: 'Mã học sinh',
                name: 'StudentCode',
                type: 'text',
                required: false,
                obligatory: false,
            },
            {
                id: 'StudentLocationAddress',
                label: 'Địa chỉ',
                name: 'StudentLocationAddress',
                type: 'textarea',
                required: false,
                obligatory: false,
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
            },
            {
                class: 'btn-upload',
                text: 'Nhập',
                type: 'upload-file',
                icon: 'assets/svg/icon-upload.svg',
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
            // {
            //     class: 'btn-upload',
            //     text: 'Nhập',
            //     type: 'upload-file',
            //     icon: 'assets/svg/icon-upload.svg',
            // }
        ];
    }
    public get btnActiceTeacher(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'create',
                icon: ''
            },
            // {
            //     class: 'btn-upload',
            //     text: 'Nhập',
            //     type: 'upload-file',
            //     icon: 'assets/svg/icon-upload.svg',
            // }
        ];
    }
    public get detail(): Array<CreateModel> {
        return [
            {
                id: 'LastName',
                label: 'Họ và tên học sinh',
                name: 'LastName',
                type: 'text',
                required: true,
                obligatory: true,
            },
            // {
            //     id: 'Phone',
            //     label: 'Tên đăng nhập',
            //     name: 'Phone',
            //     type: 'text'
            // },
            {
                id: 'ParentName',
                label: 'Họ và tên phụ huynh',
                name: 'ParentName',
                type: 'text',
            },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date',
            },
            {
                id: 'StudentGender',
                label: 'Giới tính',
                name: 'StudentGender',
                type: 'selected',
                data: []
            },
            {
                id: 'ClassId',
                label: 'Lớp',
                name: 'ClassId',
                type: 'disableSelected',
                data: []
            }, {
                id: 'StudentCode',
                label: 'Mã học sinh',
                name: 'StudentCode',
                type: 'text'
            },
            {
                id: 'LocationAddress',
                label: 'Địa chỉ',
                name: 'LocationAddress',
                type: 'textarea'
            }

        ];
    }
    public get createClass(): Array<CreateModel> {
        return [
            {
                id: 'GradeId',
                label: 'Khối',
                name: 'GradeId',
                type: 'disableSelected',
                data: []
            },
            {
                id: 'ClassName',
                label: 'Tên Lớp',
                name: 'ClassName',
                type: 'text',
                required: true,
            },
        ];
    }
    public get collumsTeacher(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'DOB',
            },
            {
                id: 'GenderString',
                name: 'Giới tính',
                width: 50,
                type: 'text',
            },
            {
                id: 'ClassName',
                name: 'Lớp',
                width: 50,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    {
                      type: 'delete',
                      text:'Xoá',
                      class: 'btn-delete'  
                    }
                ]
            },

        ];
    }
    public get createTeacher(): Array<CreateModel> {
        return [
            {
                id: 'LastName',
                label: 'Họ và tên',
                name: 'LastName',
                type: 'text',
                required: true,
                obligatory: true,
            },
            {
                id: 'Email',
                label: 'Email',
                name: 'email',
                type: 'email',
                required: true,
                obligatory: true,
            },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date'
            },
            {
                id: 'Gender',
                label: 'Giới tính',
                name: 'Gender',
                type: 'selected',
                data: [
                    {
                        value: 1,
                        name: "Nam"
                    },
                    {
                        value: 2,
                        name: "Nữ"
                    }
                ]
            },
            {
                id: 'GradeId',
                label: 'Khối',
                name: 'GradeId',
                type: 'selectChange',
                data: [],
                required: true,
            },
            {
                id: 'ClassId',
                label: 'Lớp',
                name: 'ClassId',
                type: 'selected',
                data: [],
                required: true,
            },
            {
                id: 'Phone',
                label: 'Tên đăng nhập',
                name: 'phone',
                type: 'text',
                required: true,
                obligatory: true,
            },
            {
                id: 'TeacherCode',
                label: 'Mã giáo viên',
                name: 'TeacherCode',
                type: 'text',
            },
            {
                id: 'LocationAddress',
                label: 'Địa chỉ',
                name: 'LocationAddress',
                type: 'textarea',
            },


        ];
    }
    public get detailTeacher(): Array<CreateModel> {
        return [
            {
                id: 'LastName',
                label: 'Họ và tên',
                name: 'LastName',
                type: 'text',
                required: true,
            },
            {
                id: 'Email',
                label: 'Email',
                name: 'email',
                type: 'text',
                required: true,
            },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date'
            },
            {
                id: 'Gender',
                label: 'Giới tính',
                name: 'Gender',
                type: 'selected',
                data: []
            },
            {
                id: 'GradeId',
                label: 'Khối',
                name: 'GradeId',
                type: 'selectChange',
                data: [],
                required: true,
            },
            {
                id: 'ClassId',
                label: 'Lớp',
                name: 'ClassId',
                type: 'selected',
                data: [],
                required: true,
            },
            {
                id: 'Phone',
                label: 'Tên đăng nhập',
                name: 'phone',
                type: 'text',
                disable: true,
                required: true,
            },
            {
                id: 'TeacherCode',
                label: 'Mã giáo viên',
                name: 'TeacherCode',
                type: 'text',
            },
            {
                id: 'LocationAddress',
                label: 'Địa chỉ',
                name: 'LocationAddress',
                type: 'textarea',
            },
        ];
    }
    public get importDataStudent(): Array<CreateModel> {
        return [
            {
                id: '',
                label: 'File',
                name: '',
                type: 'upload-file'
            },
        ];
    }
    public get btnEmployee(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Thêm',
                type: 'create',
                icon: ''
            }
        ];
    }
    public get btnEmployee_noAdd(): Array<any> {
        return [
            // {
            //     class: 'btn-create',
            //     text: '+  Thêm',
            //     type: 'create',
            //     icon: ''
            // }
        ];
    }
    public get collumsEmployee(): Array<CollumsModel> {
        return [
            {
                id: '',
                name: '',
                width: 50,
                type: 'checkbox',
            },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'RoleName',
                name: 'Chức vụ',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    {
                      type: 'delete',
                      text:'Xoá',
                      class: 'btn-delete'  
                    }
                ]
            },

        ];
    }
    public get collumsEmployee_noAction(): Array<CollumsModel> {
        return [
            // {
            //     id: '',
            //     name: '',
            //     width: 50,
            //     type: 'checkbox',
            // },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'RoleName',
                name: 'Chức vụ',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
            //           type: 'delete',
            //           text:'Xoá',
            //           class: 'btn-delete'  
            //         }
            //     ]
            // },

        ];
    }
    public get collumsEmployee_noDelete(): Array<CollumsModel> {
        return [
            // {
            //     id: '',
            //     name: '',
            //     width: 50,
            //     type: 'checkbox',
            // },
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'RoleName',
                name: 'Chức vụ',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    //   type: 'delete',
                    //   text:'Xoá',
                    //   class: 'btn-delete'  
                    // }
                ]
            },

        ];
    }
    public get createEmployee(): Array<CreateModel> {
        return [
            {
                id: 'LastName',
                label: 'Họ và tên',
                name: 'LastName',
                type: 'text',
                required: true,
            },
            {
                id: 'Phone',
                label: 'Tên đăng nhập',
                name: 'phone',
                type: 'text',
                required: true,
            },
            // {
            //     id: 'Email',
            //     label: 'Email',
            //     name: 'Email',
            //     type: 'email',
            //     required: true,
            // },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date'
            },
            {
                id: 'Gender',
                label: 'Giới tính',
                name: 'Gender',
                type: 'selected',
                data: []
            },
            {
                id: 'RoleId',
                label: 'Chức vụ',
                name: 'RoleId',
                type: 'selected',
                data: [],
                // required: true,
            },
            {
                id: 'LocationAddress',
                label: 'Địa chỉ',
                name: 'LocationAddress',
                type: 'textarea',
            },
        ];
    }

    public get editEmployee(): Array<CreateModel> {
        return [
            {
                id: 'LastName',
                label: 'Họ và tên',
                name: 'LastName',
                type: 'text',
                required: true,
            },
            {
                id: 'Phone',
                label: 'Tên đăng nhập',
                name: 'phone',
                type: 'text',
                required: true,
                disable: true
            },
            {
                id: 'DOB',
                label: 'Ngày sinh',
                name: 'DOB',
                type: 'date'
            },
            {
                id: 'Gender',
                label: 'Giới tính',
                name: 'Gender',
                type: 'selected',
                data: []
            },
            {
                id: 'RoleId',
                label: 'Chức vụ',
                name: 'RoleId',
                type: 'selected',
                data: [],
                // required: true
            },
            {
                id: 'LocationAddress',
                label: 'Địa chỉ',
                name: 'LocationAddress',
                type: 'textarea',
            },
        ];
    }
    public get btnAdmin(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: '+  Gán chức vụ',
                type: 'create',
                icon: ''
            }
        ];
    }
    public get btnAdmin_noAdd(): Array<any> {
        return [
            // {
            //     class: 'btn-create',
            //     text: '+  Gán chức vụ',
            //     type: 'create',
            //     icon: ''
            // }
        ];
    }
    public get collumsAdmin(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'text',
            },
            {
                id: 'Gender',
                name: 'Giới tính',
                width: 150,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    {
                      type: 'delete',
                      text:'Xoá',
                      class: 'btn-delete'  
                    }
                ]
            },

        ];
    }
    public get collumsAdmin_noAction(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'text',
            },
            {
                id: 'Gender',
                name: 'Giới tính',
                width: 150,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
            //           type: 'delete',
            //           text:'Xoá',
            //           class: 'btn-delete'  
            //         }
            //     ]
            // },

        ];
    }
    public get collumsAdmin_noDelete(): Array<CollumsModel> {
        return [
            {
                id: 'stt',
                name: 'STT',
                width: 50,
                type: 'text',
            },
            {
                id: 'LastName',
                name: 'Họ và tên',
                width: 150,
                type: 'text',
            },

            {
                id: 'DOB',
                name: 'Ngày sinh',
                width: 100,
                type: 'text',
            },
            {
                id: 'Gender',
                name: 'Giới tính',
                width: 150,
                type: 'text',
            },
            {
                id: 'Phone',
                name: 'Tên đăng nhập',
                width: 150,
                type: 'text',
            },
            {
                id: 'LocationAddress',
                name: 'Địa chỉ',
                width: 300,
                type: 'text',
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
                    //   type: 'delete',
                    //   text:'Xoá',
                    //   class: 'btn-delete'  
                    // }
                ]
            },

        ];
    }
}