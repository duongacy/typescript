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
var GioiTinh;
(function (GioiTinh) {
    GioiTinh["NAM"] = "Nam";
    GioiTinh["NU"] = "Nu";
    GioiTinh["UNKNOWN"] = "Khong xac dinh";
})(GioiTinh || (GioiTinh = {}));
var CanBo = /** @class */ (function () {
    function CanBo(_hoTen, _tuoi, _gioiTinh) {
        this.hoTen = _hoTen;
        this.tuoi = _tuoi;
        this.gioiTinh = _gioiTinh;
    }
    return CanBo;
}());
var CongNhan = /** @class */ (function (_super) {
    __extends(CongNhan, _super);
    function CongNhan(_hoTen, _tuoi, _gioiTinh, _bac) {
        var _this = _super.call(this, _hoTen, _tuoi, _gioiTinh) || this;
        _this.bac = _bac;
        return _this;
    }
    return CongNhan;
}(CanBo));
var KySu = /** @class */ (function (_super) {
    __extends(KySu, _super);
    function KySu(_hoTen, _tuoi, _gioiTinh, _nganhDaoTao) {
        var _this = _super.call(this, _hoTen, _tuoi, _gioiTinh) || this;
        _this.nganhDaoTao = _nganhDaoTao;
        return _this;
    }
    return KySu;
}(CanBo));
var NhanVien = /** @class */ (function (_super) {
    __extends(NhanVien, _super);
    function NhanVien(_hoTen, _tuoi, _gioiTinh, _congViec) {
        var _this = _super.call(this, _hoTen, _tuoi, _gioiTinh) || this;
        _this.congViec = _congViec;
        return _this;
    }
    return NhanVien;
}(CanBo));
var cb1 = new CanBo("Y dep trai", 28, GioiTinh.NAM);
var cn1 = new CongNhan("Y dep trai", 28, GioiTinh.UNKNOWN, 10);
var ks1 = new KySu("Y dep trai ki su", 10, GioiTinh.NU, "CNTT");
var nv1 = new NhanVien("Y dep trai nhan vien", 20, GioiTinh.NAM, "That nghiep");
var DanhSachCanBo = /** @class */ (function () {
    function DanhSachCanBo() {
        this.listCB = [];
    }
    DanhSachCanBo.prototype.themMoiCanBo = function (canBo) {
        this.listCB = __spreadArray(__spreadArray([], this.listCB), [canBo]);
    };
    DanhSachCanBo.prototype.findCanBoByName = function (hoTenParam) {
        var result = this.listCB.filter(function (item) { return item.hoTen === hoTenParam; });
        return result;
    };
    DanhSachCanBo.prototype.findCanBoUnderAge = function (tuoiParam) {
        var result = this.listCB.filter(function (item) { return item.tuoi <= tuoiParam; });
        return result;
    };
    DanhSachCanBo.prototype.findCanBoByGender = function (gioiTinhParam) {
        var result = this.listCB.filter(function (item) { return item.gioiTinh === gioiTinhParam; });
        return result;
    };
    DanhSachCanBo.prototype.findCanBoTheoNganh = function (nganhParam) {
    };
    return DanhSachCanBo;
}());
var dsCanBo1 = new DanhSachCanBo();
dsCanBo1.themMoiCanBo(cb1);
dsCanBo1.themMoiCanBo(ks1);
dsCanBo1.themMoiCanBo(cn1);
dsCanBo1.themMoiCanBo(nv1);
// Tìm tất cả thằng nào tên "Y dep trai"
var yDepTrai = dsCanBo1.findCanBoByName("Y dep trai");
console.log("Y dep trai", yDepTrai);
// Tìm tất cả thằng nào có tuổi dưới 18
var duoi18 = dsCanBo1.findCanBoUnderAge(18);
console.log("Can bo duoi 18 tuoi: ", duoi18);
// Tìm tất cả cán bộ là nữ
var cbNu = dsCanBo1.findCanBoByGender(GioiTinh.NU);
console.log("Can bo nu: ", cbNu);
