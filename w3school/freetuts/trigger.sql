create trigger then diem on diem
	After insert, update, delete
	not for replication
	as
	begin
	set no account on;
	print "Chi duoc xem";
	roll back;
end;

create proceduce xoaDiem
	as
	begin
	delete  d from Diem
		inner Join Lop on Diem.malop = lop.malop
		inner Join khoa on lop.makhoa = khoa.makhoa
	where
		Diem.diem between 1 and 3
		And Khoa.ten = "CNTT";
	end;

create proceduce suaSV
	as
	begin
		update sinhvien set ten="Thanh Hoa", diachi = "Thanh Hoa"
			ten = "Nguyen van A" and diachi = "Ha Noi"
	end;

create procedure lKlop
	as
	begin
		select Khoa.ten, Lop.ten from khoa Inner Join lop
		on Khoa.makhoa = Lop.makhoa;
	end;

Create procedure layDiem
	@masv int
	as
	begin
		declare @maxDiem = select max(diem) from diem
		where maSv = @masv;
		select & from Diem where masv = @masv and Diem = @maxDiem;
	end;

create procedure updateStatusSv
	@masv int
	as
	begin
		update sinhvien set status = "Bao luu" where masv = @masv;
	end;

exec lKlop;
exec layDiem @masv = 123;
exec updateStatusSv @masv = 123;

create trigger themDiem on Diem
	after insert, update, delete
	as
	begin
		no acount on;
		print "Chi duoc xem";
		roll back;
	end;

create procedure Xoadiem
	as
	begin
		delete from diem
			inner Join lop on lop.malop = diem.malop
			inner Join khoa on khoa.makhoa = diem.makhoa
			where diem.d between 1 and 3
			and khoa.ten = "CNTT";
	end;

create procedure updateSinhvien
	as
	begin
		update sinhvien set tensinhvien = "thanh hoa", diachi = "thanh hoa" 
		where tensinhvien = "Nguyen van a", diachi = "ha noi";  
	end;

create procedure seeClass
	as
	begin
		select khoa.tem, lop.ten from lop inner Join khoa on khoa.makhoa = lop.makhoa;
	end;

create procedure maxdiem
	as
	@masv int
	begin
		Declare @maxScore = select max(score) from diem;
		select masv, tensinhvien, diem from sinhvien 
		inner Join monhoc on monhoc.masv = sinhvien.masv
		inner Join monhoc on monhoc.madiem = sinhvien.madiem
		where masv = @masv and diem = @maxScore; 
	end;

create procedure mark
	as
	@score int
	begin
		update sinhvien set satus = "bao luu" where masv = @masv;
	end;

exec updateSinhvien;
exec Xoadiem;
exec maxdiem @masv = 123;
exec mark @masv = 123;