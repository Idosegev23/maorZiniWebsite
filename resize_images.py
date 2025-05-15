from PIL import Image
import os
import sys

def resize_images(directory, max_size_mb=1.0, quality=85):
    """
    מצמצם את גודל כל קבצי התמונה בתיקייה שצוינה
    
    Args:
        directory: נתיב לתיקייה
        max_size_mb: גודל מקסימלי רצוי במגה-בייט
        quality: איכות התמונה (1-100)
    """
    max_size_bytes = max_size_mb * 1024 * 1024
    
    if not os.path.exists(directory):
        print(f"התיקייה {directory} לא קיימת!")
        return
    
    # מעבר על כל הקבצים בתיקייה
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            filesize = os.path.getsize(filepath)
            
            print(f"מעבד: {filename} - גודל נוכחי: {filesize / (1024 * 1024):.2f} MB")
            
            # אם גודל הקובץ גדול מהמקסימום הרצוי
            if filesize > max_size_bytes:
                try:
                    # פתיחת התמונה
                    img = Image.open(filepath)
                    
                    # שמירת גודל מקורי
                    width, height = img.size
                    
                    # חישוב יחס הקטנה
                    ratio = (max_size_bytes / filesize) ** 0.5
                    
                    # אם היחס קטן מאוד, נקבע מינימום
                    if ratio < 0.5:
                        ratio = 0.5
                    
                    # חישוב גודל חדש
                    new_width = int(width * ratio)
                    new_height = int(height * ratio)
                    
                    # שינוי גודל התמונה
                    img_resized = img.resize((new_width, new_height), Image.LANCZOS)
                    
                    # גיבוי הקובץ המקורי
                    backup_path = filepath + '.backup'
                    os.rename(filepath, backup_path)
                    
                    # שמירת התמונה עם איכות מופחתת
                    img_resized.save(filepath, quality=quality, optimize=True)
                    
                    # חישוב גודל חדש
                    new_size = os.path.getsize(filepath)
                    print(f"  שונה לגודל: {new_size / (1024 * 1024):.2f} MB ({new_width}x{new_height})")
                    
                    # אם התמונה עדיין גדולה מדי, ננסה להפחית את האיכות
                    if new_size > max_size_bytes:
                        for q in [70, 60, 50]:
                            img_resized.save(filepath, quality=q, optimize=True)
                            final_size = os.path.getsize(filepath)
                            if final_size <= max_size_bytes:
                                print(f"  הופחתה איכות ל-{q}%, גודל סופי: {final_size / (1024 * 1024):.2f} MB")
                                break
                            print(f"  ניסיון עם איכות {q}%: {final_size / (1024 * 1024):.2f} MB")
                    
                except Exception as e:
                    print(f"שגיאה בעיבוד {filename}: {e}")
                    # שחזור הקובץ המקורי אם הייתה שגיאה
                    if os.path.exists(backup_path):
                        os.replace(backup_path, filepath)
            else:
                print(f"  כבר בגודל מתאים")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        directory = sys.argv[1]
    else:
        directory = "public/services"
    
    max_size = 0.8  # גודל מקסימלי במגה-בייט
    if len(sys.argv) > 2:
        max_size = float(sys.argv[2])
    
    print(f"מצמצם תמונות בתיקייה {directory} לגודל מקסימלי של {max_size} MB")
    resize_images(directory, max_size)
    print("הסתיים!") 