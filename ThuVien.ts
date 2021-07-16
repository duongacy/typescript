enum ETheLoai {
    SACH = "Sach",
    TAP_CHI = "Tap chi",
    BAO = "Bao"
}
class TaiLieu {
    maTaiLieu: string;
    tenNhaSanXuat: string;
    sobanPhatHanh: number;
    constructor(_matl: string, _nsx: string, _soBPH: number) {
        this.maTaiLieu = _matl;
        this.tenNhaSanXuat = _nsx;
        this.sobanPhatHanh = _soBPH;
    }
    showThongTin(): void {
        console.log("Ma tai lieu: ", this.maTaiLieu);
        console.log("Ten nha san xuat: ", this.tenNhaSanXuat);
        console.log("So ban phat hanh: ", this.sobanPhatHanh);
    }
    getType(): string {
        return this.constructor.name;
    }
}

class Sach extends TaiLieu {
    tenTacGia: string;
    soTrang: number;
    constructor(_matl: string, _nsx: string, _soBPH: number, _tenTG: string, _soTrang: number) {
        super(_matl, _nsx, _soBPH);
        this.tenTacGia = _tenTG;
        this.soTrang = _soTrang;
    }
    showThongTin(): void {
        super.showThongTin();
        console.log("Ten tac gia: ", this.tenTacGia);
        console.log("So trang: ", this.soTrang);
    }

}

class TapChi extends TaiLieu {
    soPhatHanh: number;
    thangPhatHanh: number;
    constructor(_matl: string, _nsx: string, _soBPH: number, _soPH: number, _thangPH: number) {
        super(_matl, _nsx, _soBPH);
        this.soPhatHanh = _soPH;
        this.thangPhatHanh = _thangPH;
    }
    showThongTin(): void {
        super.showThongTin();
        console.log("So phat hanh:", this.soPhatHanh);
        console.log("Thang phat hanh:", this.thangPhatHanh);
    }
}

class Bao extends TaiLieu {
    ngayPhatHanh: string;
    constructor(_matl: string, _nsx: string, _soBPH: number, _ngayPH: string) {
        super(_matl, _nsx, _soBPH);
        this.ngayPhatHanh = _ngayPH;
    }
    showThongTin(): void {
        super.showThongTin();
        console.log("Ngay phat hanh: ", this.ngayPhatHanh);
    }
}

type ITaiLieu = Sach | TapChi | Bao;
class ThuVien {
    danhSachTaiLieu: ITaiLieu[] = [];
    themMoiTaiLieu(taiLieuParam: ITaiLieu): void {
        this.danhSachTaiLieu = [...this.danhSachTaiLieu, taiLieuParam];
    }
    xoaTaiLieuById(maTL: string): void {
        const result: ITaiLieu[] = this.danhSachTaiLieu.filter(item => item.maTaiLieu !== maTL);
        this.danhSachTaiLieu = result;
    }
    timTaiLieuTheoLoai(theLoai: ETheLoai): ITaiLieu[] {
        const result: ITaiLieu[] = this.danhSachTaiLieu.filter(item => item.getType() === theLoai);
        return result;
    }
    showListThongTin():void{
        for (const item of this.danhSachTaiLieu) {
            item.showThongTin();
            console.log("++++++++++++++=");
            
        }
    }
}

const sach = new Sach("ma_01", "Kim Dong", 100, "Nguyen Truong Sinh", 248);
const bao = new Bao("ma_02", "Kim Chon", 240, "30/6/2020");
const tapChi = new TapChi("ma_03", "Kim Dung", 400, 40, 12);

const thuVien = new ThuVien();

thuVien.themMoiTaiLieu(sach);
thuVien.themMoiTaiLieu(bao);
thuVien.themMoiTaiLieu(tapChi);

const listBao:ITaiLieu[] =thuVien.timTaiLieuTheoLoai(ETheLoai.BAO);

thuVien.showListThongTin();

