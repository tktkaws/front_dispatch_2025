export function sanitizeHtml(html: string): string {
  // 改行の正規化
  let sanitized = html.replace(/\r\n/g, '\n');
  
  // 空白文字の正規化
  sanitized = sanitized.replace(/\s+/g, ' ');
  
  // 自己終了タグの正規化
  sanitized = sanitized.replace(/<(br|hr|img)([^>]*)>/g, '<$1$2 />');
  
  return sanitized;
} 