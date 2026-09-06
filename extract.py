import fitz
import sys
import os

pdf_path = sys.argv[1]
output_dir = sys.argv[2]

doc = fitz.open(pdf_path)
for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) # scale up for better quality
    pix.save(os.path.join(output_dir, f"cert{page_num + 1}.jpg"))
