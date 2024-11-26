# search
## project structure
- `index.html`: ไฟล์หน้าแรกของเว็บไซต์
- `code.gs`: appscript ไฟล์
- `Style.html`: css ไฟล์.
- `Js.html`: javascript ไฟล์.
- `Navbar.html`: ไฟล์ component navbar.
- `Form.html`: ไฟล์ component layout ของ form.
- `Result.html`: ไฟล์ component result.
- `Footer.html`: ไฟล์ component footer.

## code.gs
1. **`const spreadsheetId = ''; `**: ใช้ช่องจะใส่id ของ googlesheet`.
2. **`const dataRange = 'ชีต1!A2:G1000';; `**: กำหนดขอบเขตในการค้นหน้า`.
3. **`return data.filter(studentData => studentData[2].includes(searchtext)).map(filterStdData => ({
      sportId: filterStdData[0],
      firstName: filterStdData[2],
      surName: filterStdData[3],
      sport: filterStdData[4],
      rank: filterStdData[5],
      certURL: filterStdData[6]
  }))';; `**: กำหนดค่าคอลั่มที่จะใช้ค้นหาโดย studentData[2]จะหมายถึง ค้นหาจากข้อมูลใน คอลั่มที่ 3 **สามารถเปลี่ยนค่าargument ได้ตาม data ที่เราใช้
จากนั้นจะ return object กลับไป

