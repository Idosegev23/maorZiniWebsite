import { readFile } from 'node:fs/promises';
import { PDFDocument } from 'pdf-lib';

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node scripts/list-pdf-fields.mjs <absolute_pdf_path>');
    process.exit(1);
  }

  const bytes = await readFile(filePath);
  const pdf = await PDFDocument.load(bytes);
  const form = pdf.getForm();
  const fields = form.getFields();

  const summary = fields.map((f) => {
    const name = typeof f.getName === 'function' ? f.getName() : 'unknown';
    const type = typeof f.setText === 'function'
      ? 'TextField'
      : typeof f.isChecked === 'function'
      ? 'CheckBox'
      : typeof f.getOptions === 'function'
      ? 'Dropdown/OptionList'
      : typeof f.getSelected === 'function'
      ? 'RadioGroup'
      : typeof f.clear === 'function' && typeof f.addToPage === 'function'
      ? 'Signature?'
      : 'Unknown';
    return { name, type };
  });

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

