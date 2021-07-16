var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var ETheLoai;
(function (ETheLoai) {
    ETheLoai["SACH"] = "Sach";
    ETheLoai["TAP_CHI"] = "Tap chi";
    ETheLoai["BAO"] = "Bao";
})(ETheLoai || (ETheLoai = {}));
var TaiLieu = /** @class */ (function () {
    function TaiLieu(_matl, _nsx, _soBPH) {
        this.maTaiLieu = _matl;
        this.tenNhaSanXuat = _nsx;
        this.sobanPhatHanh = _soBPH;
    }
    TaiLieu.prototype.showThongTin = function () {
        console.log("Ma tai lieu: ", this.maTaiLieu);
        console.log("Ten nha san xuat: ", this.tenNhaSanXuat);
        console.log("So ban phat hanh: ", this.sobanPhatHanh);
    };
    TaiLieu.prototype.getType = function () {
        return this.constructor.name;
    };
    return TaiLieu;
}());
var Sach = /** @class */ (function (_super) {
    __extends(Sach, _super);
    function Sach(_matl, _nsx, _soBPH, _tenTG, _soTrang) {
        var _this = _super.call(this, _matl, _nsx, _soBPH) || this;
        _this.tenTacGia = _tenTG;
        _this.soTrang = _soTrang;
        return _this;
    }
    Sach.prototype.showThongTin = function () {
        _super.prototype.showThongTin.call(this);
        console.log("Ten tac gia: ", this.tenTacGia);
        console.log("So trang: ", this.soTrang);
    };
    return Sach;
}(TaiLieu));
var TapChi = /** @class */ (function (_super) {
    __extends(TapChi, _super);
    function TapChi(_matl, _nsx, _soBPH, _soPH, _thangPH) {
        var _this = _super.call(this, _matl, _nsx, _soBPH) || this;
        _this.soPhatHanh = _soPH;
        _this.thangPhatHanh = _thangPH;
        return _this;
    }
    TapChi.prototype.showThongTin = function () {
        _super.prototype.showThongTin.call(this);
        console.log("So phat hanh:", this.soPhatHanh);
        console.log("Thang phat hanh:", this.thangPhatHanh);
    };
    return TapChi;
}(TaiLieu));
var Bao = /** @class */ (function (_super) {
    __extends(Bao, _super);
    function Bao(_matl, _nsx, _soBPH, _ngayPH) {
        var _this = _super.call(this, _matl, _nsx, _soBPH) || this;
        _this.ngayPhatHanh = _ngayPH;
        return _this;
    }
    Bao.prototype.showThongTin = function () {
        _super.prototype.showThongTin.call(this);
        console.log("Ngay phat hanh: ", this.ngayPhatHanh);
    };
    return Bao;
}(TaiLieu));
var ThuVien = /** @class */ (function () {
    function ThuVien() {
        this.danhSachTaiLieu = [];
    }
    ThuVien.prototype.themMoiTaiLieu = function (taiLieuParam) {
        this.danhSachTaiLieu = __spreadArray(__spreadArray([], this.danhSachTaiLieu), [taiLieuParam]);
    };
    ThuVien.prototype.xoaTaiLieuById = function (maTL) {
        var result = this.danhSachTaiLieu.filter(function (item) { return item.maTaiLieu !== maTL; });
        this.danhSachTaiLieu = result;
    };
    ThuVien.prototype.timTaiLieuTheoLoai = function (theLoai) {
        var result = this.danhSachTaiLieu.filter(function (item) { return item.getType() === theLoai; });
        return result;
    };
    ThuVien.prototype.showListThongTin = function () {
        for (var _i = 0, _a = this.danhSachTaiLieu; _i < _a.length; _i++) {
            var item = _a[_i];
            item.showThongTin();
            console.log("++++++++++++++=");
        }
    };
    return ThuVien;
}());
var sach = new Sach("ma_01", "Kim Dong", 100, "Nguyen Truong Sinh", 248);
var bao = new Bao("ma_02", "Kim Chon", 240, "30/6/2020");
var tapChi = new TapChi("ma_03", "Kim Dung", 400, 40, 12);
var thuVien = new ThuVien();
thuVien.themMoiTaiLieu(sach);
thuVien.themMoiTaiLieu(bao);
thuVien.themMoiTaiLieu(tapChi);
var listBao = thuVien.timTaiLieuTheoLoai(ETheLoai.BAO);
thuVien.showListThongTin();
