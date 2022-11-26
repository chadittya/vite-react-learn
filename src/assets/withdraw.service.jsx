export function withdraw(name, total, amount) {
  return (
    <span className="penjumlahan">
      Uang {name} di Bank tinggal {total - amount}
    </span>
  );
}
