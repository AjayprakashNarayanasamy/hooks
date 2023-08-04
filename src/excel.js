import React, { useState, useEffect, useRef } from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style"

function Excel() {
  const excelData = [
    {
      name: "Ajay",
      age: 24,
      gender: "M",
    },
  ];
  const fileType ='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
  const fileExtension = '.xlsx';
  const exportToExcel = async () =>{
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = {Sheets:{'data': ws},SheetNames:['data']}
    const excelBuffer = XLSX.write(wb,{bookType:'xlsx',type:'array'});
    const data = new Blob([excelBuffer],{type:fileType});
    FileSaver.saveAs(data,"Test" + fileExtension)
  }
  return (
    <>
      <div>
        <button onClick={exportToExcel}>Data to Excel</button>
      </div>
    </>
  );
}
export default Excel;
