enum GioiTinh {
    NAM = "Nam",
    NU = "Nu",
    UNKNOWN = "Khong xac dinh"
}
class CanBo {
    hoTen: string;
    tuoi: number;
    gioiTinh: GioiTinh;
    constructor(_hoTen: string, _tuoi: number, _gioiTinh: GioiTinh) {
        this.hoTen = _hoTen;
        this.tuoi = _tuoi;
        this.gioiTinh = _gioiTinh;
    }
}

class CongNhan extends CanBo {
    bac: number;
    constructor(_hoTen: string, _tuoi: number, _gioiTinh: GioiTinh, _bac: number) {
        super(_hoTen, _tuoi, _gioiTinh);
        this.bac = _bac;
    }
}

class KySu extends CanBo {
    nganhDaoTao: string;
    constructor(_hoTen: string, _tuoi: number, _gioiTinh: GioiTinh, _nganhDaoTao: string) {
        super(_hoTen, _tuoi, _gioiTinh);
        this.nganhDaoTao = _nganhDaoTao;
    }
}

class NhanVien extends CanBo {
    congViec: string;
    constructor(_hoTen: string, _tuoi: number, _gioiTinh: GioiTinh, _congViec: string) {
        super(_hoTen, _tuoi, _gioiTinh);
        this.congViec = _congViec;
    }
}

const cb1 = new CanBo("Y dep trai", 28, GioiTinh.NAM);

const cn1 = new CongNhan("Y dep trai", 28, GioiTinh.UNKNOWN, 10);

const ks1 = new KySu("Y dep trai ki su", 10, GioiTinh.NU, "CNTT");

const nv1 = new NhanVien("Y dep trai nhan vien", 20, GioiTinh.NAM, "That nghiep")

type ICanBo = CanBo | CongNhan | KySu | NhanVien;
class DanhSachCanBo {
    listCB: ICanBo[] = [];
    themMoiCanBo(canBo: ICanBo) {
        this.listCB = [...this.listCB, canBo];
    }
    findCanBoByName(hoTenParam: string) {
        const result: ICanBo[] = this.listCB.filter(item => item.hoTen === hoTenParam);
        return result;
    }
    findCanBoUnderAge(tuoiParam: number) {
        const result: ICanBo[] = this.listCB.filter(item => item.tuoi <= tuoiParam);
        return result;
    }

    findCanBoByGender(gioiTinhParam: GioiTinh) {
        const result: ICanBo[] = this.listCB.filter(item => item.gioiTinh === gioiTinhParam);
        return result;
    }

    findCanBoTheoNganh(nganhParam: string) {

    }
}

const dsCanBo1 = new DanhSachCanBo();
dsCanBo1.themMoiCanBo(cb1);
dsCanBo1.themMoiCanBo(ks1);
dsCanBo1.themMoiCanBo(cn1);
dsCanBo1.themMoiCanBo(nv1);


// Tìm tất cả thằng nào tên "Y dep trai"
const yDepTrai = dsCanBo1.findCanBoByName("Y dep trai");
console.log("Y dep trai", yDepTrai);

// Tìm tất cả thằng nào có tuổi dưới 18
const duoi18 = dsCanBo1.findCanBoUnderAge(18);
console.log("Can bo duoi 18 tuoi: ", duoi18);

// Tìm tất cả cán bộ là nữ
const cbNu = dsCanBo1.findCanBoByGender(GioiTinh.NU);
console.log("Can bo nu: ", cbNu);
