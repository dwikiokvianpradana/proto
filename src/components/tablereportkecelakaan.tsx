'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
  {
    no: "INV001",
    nama: "Dwiki Okvian Pradana",
    jabatan: "Supervisor",
    jenisPelanggaran: "Pelanggaran Ringan",
    lokasiPelanggaran: "Dekat kantor"
  },
]

export function TableReportsKecelakaan() {
  return (
    <Table>
      <TableCaption>Daftar Riwayat Pelanggaran</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nama</TableHead>
          <TableHead>Jabatan</TableHead>
          <TableHead>Jenis Pelanggaran</TableHead>
          <TableHead className="text-right">Lokasi Pelanggaran</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{invoice.nama}</TableCell>
            <TableCell>{invoice.jabatan}</TableCell>
            <TableCell>{invoice.jenisPelanggaran}</TableCell>
            <TableCell className="text-right">{invoice.lokasiPelanggaran}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  )
}
