/**
 * Các hàm để xóa ký tự dấu nháy từ chuỗi ký tự
 */

// Phương pháp 1: Xóa tất cả dấu nháy (cả đơn và kép, bao gồm tất cả Unicode quotes)
function removeAllQuotes(str) {
    // Xóa tất cả loại dấu nháy: ASCII, Unicode và các biến thể khác
    return str.replace(/[\u0022\u0027\u00AB\u00BB\u2018\u2019\u201A\u201B\u201C\u201D\u201E\u201F\u2039\u203A\u300C\u300D\u300E\u300F\u301D\u301E\u301F\uFF02\uFF07\uFF62\uFF63]/g, '');
}

// Phương pháp 2: Chỉ xóa dấu nháy kép (bao gồm tất cả Unicode)
function removeDoubleQuotes(str) {
    // Xóa dấu nháy kép ASCII và tất cả Unicode double quotes
    return str.replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2039\u203A\u300C\u300D\u300E\u300F\u301D\u301E\u301F\uFF02\uFF62\uFF63]/g, '');
}

// Phương pháp 3: Chỉ xóa dấu nháy đơn (bao gồm tất cả Unicode)
function removeSingleQuotes(str) {
    // Xóa dấu nháy đơn ASCII và tất cả Unicode single quotes
    return str.replace(/[\u0027\u2018\u2019\u201A\u201B\uFF07]/g, '');
}

// Phương pháp 7: Xóa ký tự đặc biệt (giữ lại chữ cái, số và khoảng trắng)
function removeSpecialCharacters(str) {
    // Chỉ giữ lại chữ cái (a-z, A-Z), số (0-9), khoảng trắng và một số ký tự cơ bản
    return str.replace(/[^\w\s\u00C0-\u024F\u1E00-\u1EFF]/g, '');
}

// Phương pháp 8: Xóa dấu chấm ở cuối chuỗi
function removeTrailingPeriods(str) {
    // Xóa tất cả dấu chấm ở cuối chuỗi (bao gồm nhiều dấu chấm liên tiếp)
    return str.replace(/\.+$/, '');
}

// Phương pháp 9: Xóa tất cả dấu chấm
function removeAllPeriods(str) {
    return str.replace(/\./g, '');
}

// Phương pháp 10: Xóa ký tự đặc biệt và dấu chấm cuối (kết hợp)
function removeSpecialAndTrailingPeriods(str) {
    return removeTrailingPeriods(removeSpecialCharacters(str));
}

// Phương pháp 11: Xóa tất cả (dấu nháy + ký tự đặc biệt + dấu chấm cuối)
function removeAll(str) {
    return removeTrailingPeriods(removeSpecialCharacters(removeAllQuotes(str)));
}

// Phương pháp 12: Dọn dẹp hoàn toàn (bao gồm trim và normalize spaces)
function cleanupText(str) {
    return str
        .replace(/[\u0022\u0027\u00AB\u00BB\u2018\u2019\u201A\u201B\u201C\u201D\u201E\u201F\u2039\u203A\u300C\u300D\u300E\u300F\u301D\u301E\u301F\uFF02\uFF07\uFF62\uFF63]/g, '') // Xóa dấu nháy
        .replace(/[^\w\s\u00C0-\u024F\u1E00-\u1EFF]/g, '') // Xóa ký tự đặc biệt
        .replace(/\.+$/, '') // Xóa dấu chấm cuối
        .replace(/\s+/g, ' ') // Chuẩn hóa khoảng trắng
        .toLowerCase() // Chuyển thành chữ thường
        .trim(); // Xóa khoảng trắng đầu cuối
}

// Phương pháp 13: Chuyển tất cả thành chữ thường
function convertToLowerCase(str) {
    return str.toLowerCase();
}

// Phương pháp 4: Xóa dấu nháy sử dụng split và join (bao gồm tất cả Unicode)
function removeQuotesWithSplit(str) {
    // List tất cả các ký tự dấu nháy cần xóa
    const quotesToRemove = [
        '\u0022', // " - ASCII double quote
        '\u0027', // ' - ASCII single quote
        '\u00AB', // « - Left-pointing double angle quotation mark
        '\u00BB', // » - Right-pointing double angle quotation mark
        '\u2018', // ' - Left single quotation mark
        '\u2019', // ' - Right single quotation mark
        '\u201A', // ‚ - Single low-9 quotation mark
        '\u201B', // ‛ - Single high-reversed-9 quotation mark
        '\u201C', // " - Left double quotation mark
        '\u201D', // " - Right double quotation mark
        '\u201E', // „ - Double low-9 quotation mark
        '\u201F', // ‟ - Double high-reversed-9 quotation mark
        '\u2039', // ‹ - Single left-pointing angle quotation mark
        '\u203A', // › - Single right-pointing angle quotation mark
        '\u300C', // 「 - Left corner bracket
        '\u300D', // 」 - Right corner bracket
        '\u300E', // 『 - Left white corner bracket
        '\u300F', // 』 - Right white corner bracket
        '\u301D', // 〝 - Reversed double prime quotation mark
        '\u301E', // 〞 - Double prime quotation mark
        '\u301F', // 〟 - Low double prime quotation mark
        '\uFF02', // ＂ - Fullwidth quotation mark
        '\uFF07', // ＇ - Fullwidth apostrophe
        '\uFF62', // ｢ - Halfwidth left corner bracket
        '\uFF63'  // ｣ - Halfwidth right corner bracket
    ];
    
    let result = str;
    quotesToRemove.forEach(quote => {
        result = result.split(quote).join('');
    });
    return result;
}

// Phương pháp 5: Sử dụng vòng lặp để xóa ký tự (bao gồm tất cả Unicode)
function removeQuotesWithLoop(str) {
    const quotesToRemove = [
        '\u0022', '\u0027', '\u00AB', '\u00BB', '\u2018', '\u2019', '\u201A', '\u201B',
        '\u201C', '\u201D', '\u201E', '\u201F', '\u2039', '\u203A', '\u300C', '\u300D',
        '\u300E', '\u300F', '\u301D', '\u301E', '\u301F', '\uFF02', '\uFF07', '\uFF62', '\uFF63'
    ];
    
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!quotesToRemove.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

// Phương pháp 6: Sử dụng filter và Array (bao gồm tất cả Unicode)
function removeQuotesWithFilter(str) {
    const quotesToRemove = [
        '\u0022', '\u0027', '\u00AB', '\u00BB', '\u2018', '\u2019', '\u201A', '\u201B',
        '\u201C', '\u201D', '\u201E', '\u201F', '\u2039', '\u203A', '\u300C', '\u300D',
        '\u300E', '\u300F', '\u301D', '\u301E', '\u301F', '\uFF02', '\uFF07', '\uFF62', '\uFF63'
    ];
    return str.split('').filter(char => !quotesToRemove.includes(char)).join('');
}

// Hàm cập nhật thống kê ký tự và từ
function updateStats() {
    const inputText = document.getElementById('inputText').value;
    const charCount = document.getElementById('charCount');
    const wordCount = document.getElementById('wordCount');
    const inputTextarea = document.getElementById('inputText');
    const statsContainer = document.querySelector('.stats-container');
    
    // Đếm số ký tự
    const charLength = inputText.length;
    
    // Đếm số từ (loại bỏ khoảng trắng thừa và đếm)
    const words = inputText.trim().split(/\s+/);
    const wordLength = inputText.trim() === '' ? 0 : words.length;
    
    // Cập nhật UI
    charCount.textContent = charLength;
    wordCount.textContent = wordLength;
    
    // Kiểm tra giới hạn 100 ký tự (chỉ hiển thị cảnh báo, không disable)
    if (charLength > 100) {
        // Thêm class cảnh báo
        inputTextarea.classList.add('char-limit-exceeded');
        statsContainer.classList.add('warning');
        charCount.classList.add('warning-text');
    } else {
        // Xóa class cảnh báo
        inputTextarea.classList.remove('char-limit-exceeded');
        statsContainer.classList.remove('warning');
        charCount.classList.remove('warning-text');
    }
}

// Hàm hiển thị kết quả lên giao diện
function displayResult(result) {
    const resultTextarea = document.getElementById('resultText');
    resultTextarea.value = result;
    
    // Thêm hiệu ứng highlight
    resultTextarea.style.backgroundColor = '#e6fffa';
    setTimeout(() => {
        resultTextarea.style.backgroundColor = '#ffffff';
    }, 1000);
    
    // Reset nút copy về trạng thái ban đầu
    resetCopyButton();
}

// Hàm sao chép input vào clipboard
async function copyInputToClipboard() {
    const inputTextarea = document.getElementById('inputText');
    const copyInputButton = document.getElementById('copyInputButton');
    
    if (!inputTextarea.value.trim()) {
        alert('Không có nội dung để sao chép!');
        return;
    }
    
    try {
        // Sử dụng Clipboard API hiện đại
        await navigator.clipboard.writeText(inputTextarea.value);
        
        // Cập nhật UI để thông báo đã sao chép
        copyInputButton.innerHTML = '✅ Đã sao chép';
        copyInputButton.classList.add('copied');
        
        // Reset sau 2 giây
        setTimeout(() => {
            copyInputButton.innerHTML = '📋 Sao chép Input';
            copyInputButton.classList.remove('copied');
        }, 2000);
        
        // Thêm hiệu ứng flash cho textarea
        inputTextarea.style.backgroundColor = '#c6f6d5';
        setTimeout(() => {
            inputTextarea.style.backgroundColor = '#ffffff';
        }, 500);
        
    } catch (err) {
        // Fallback cho trình duyệt cũ
        try {
            inputTextarea.select();
            inputTextarea.setSelectionRange(0, 99999); // Cho mobile
            document.execCommand('copy');
            
            copyInputButton.innerHTML = '✅ Đã sao chép';
            copyInputButton.classList.add('copied');
            
            setTimeout(() => {
                copyInputButton.innerHTML = '📋 Sao chép Input';
                copyInputButton.classList.remove('copied');
            }, 2000);
            
        } catch (fallbackErr) {
            alert('Không thể sao chép tự động. Vui lòng sao chép thủ công!');
            inputTextarea.select();
        }
    }
}

// Hàm sao chép kết quả vào clipboard
async function copyToClipboard() {
    const resultTextarea = document.getElementById('resultText');
    const copyButton = document.getElementById('copyButton');
    
    if (!resultTextarea.value.trim()) {
        alert('Không có nội dung để sao chép!');
        return;
    }
    
    try {
        // Sử dụng Clipboard API hiện đại
        await navigator.clipboard.writeText(resultTextarea.value);
        
        // Cập nhật UI để thông báo đã sao chép
        copyButton.innerHTML = '✅ Đã sao chép';
        copyButton.classList.add('copied');
        
        // Reset sau 2 giây
        setTimeout(() => {
            resetCopyButton();
        }, 2000);
        
        // Thêm hiệu ứng flash cho textarea
        resultTextarea.style.backgroundColor = '#c6f6d5';
        setTimeout(() => {
            resultTextarea.style.backgroundColor = '#ffffff';
        }, 500);
        
    } catch (err) {
        // Fallback cho trình duyệt cũ
        try {
            resultTextarea.select();
            resultTextarea.setSelectionRange(0, 99999); // Cho mobile
            document.execCommand('copy');
            
            copyButton.innerHTML = '✅ Đã sao chép';
            copyButton.classList.add('copied');
            
            setTimeout(() => {
                resetCopyButton();
            }, 2000);
            
        } catch (fallbackErr) {
            alert('Không thể sao chép tự động. Vui lòng sao chép thủ công!');
            resultTextarea.select();
        }
    }
}

// Hàm reset nút copy về trạng thái ban đầu
function resetCopyButton() {
    const copyButton = document.getElementById('copyButton');
    copyButton.innerHTML = '📋 Sao chép';
    copyButton.classList.remove('copied');
}

// Hàm xử lý khi nhấn nút "Xóa Tất Cả Dấu Nháy"
function removeQuotesMethod1() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = removeAllQuotes(inputText);
    displayResult(result);
    
    // Hiển thị thông tin xử lý
    console.log('Phương pháp 1 - Xóa tất cả dấu nháy:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý khi nhấn nút "Xóa Chỉ Dấu Nháy Kép"
function removeQuotesMethod2() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = removeDoubleQuotes(inputText);
    displayResult(result);
    
    console.log('Phương pháp 2 - Xóa chỉ dấu nháy kép:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý khi nhấn nút "Xóa Chỉ Dấu Nháy Đơn"
function removeQuotesMethod3() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = removeSingleQuotes(inputText);
    displayResult(result);
    
    console.log('Phương pháp 3 - Xóa chỉ dấu nháy đơn:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý xóa ký tự đặc biệt
function removeSpecialMethod() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = removeSpecialCharacters(inputText);
    displayResult(result);
    
    console.log('Xóa ký tự đặc biệt:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý xóa dấu chấm cuối
function removeTrailingPeriodsMethod() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = removeTrailingPeriods(inputText);
    displayResult(result);
    
    console.log('Xóa dấu chấm cuối:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý xóa tất cả dấu chấm
function removeAllPeriodsMethod() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = removeAllPeriods(inputText);
    displayResult(result);
    
    console.log('Xóa tất cả dấu chấm:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý dọn dẹp hoàn toàn
function cleanupMethod() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = cleanupText(inputText);
    displayResult(result);
    
    console.log('Dọn dẹp hoàn toàn:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xử lý chuyển chữ thường
function convertToLowerCaseMethod() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText.trim()) {
        alert('Vui lòng nhập chuỗi cần xử lý!');
        return;
    }
    
    const result = convertToLowerCase(inputText);
    displayResult(result);
    
    console.log('Chuyển thành chữ thường:');
    console.log('Input:', inputText);
    console.log('Output:', result);
}

// Hàm xóa tất cả nội dung
function clearAll() {
    document.getElementById('inputText').value = '';
    document.getElementById('resultText').value = '';
    updateStats(); // Cập nhật lại stats về 0 và xóa cảnh báo
}

// Hàm demo các phương pháp khác nhau (chạy trong console)
function demoAllMethods() {
    const testString = 'Hello "World" and \'JavaScript\' programming \u201Ctest\u201D with special@#$%^&*()chars... end with dots...';
    
    console.log('=== DEMO CÁC PHƯƠNG PHÁP XỬ LÝ CHUỖI ===');
    console.log('Chuỗi gốc:', testString);
    console.log('');
    
    console.log('🔤 LOẠI BỎ DẤU NHÁY:');
    console.log('1. Regex - Xóa tất cả dấu nháy:', removeAllQuotes(testString));
    console.log('2. Regex - Chỉ dấu nháy kép:', removeDoubleQuotes(testString));
    console.log('3. Regex - Chỉ dấu nháy đơn:', removeSingleQuotes(testString));
    console.log('');
    
    console.log('🧹 LOẠI BỎ KÝ TỰ ĐẶC BIỆT:');
    console.log('4. Xóa ký tự đặc biệt:', removeSpecialCharacters(testString));
    console.log('5. Xóa dấu chấm cuối:', removeTrailingPeriods(testString));
    console.log('6. Xóa tất cả dấu chấm:', removeAllPeriods(testString));
    console.log('');
    
    console.log('🚀 KẾT HỢP:');
    console.log('7. Xóa đặc biệt + dấu chấm cuối:', removeSpecialAndTrailingPeriods(testString));
    console.log('8. Xóa tất cả:', removeAll(testString));
    console.log('9. Dọn dẹp hoàn toàn:', cleanupText(testString));
    
    // Test riêng với Unicode quotes
    const unicodeTest = 'Test \u201CUnicode\u201D quotes \u2018and\u2019 special!@#$%...';
    console.log('\n=== TEST VỚI UNICODE VÀ KÝ TỰ ĐẶC BIỆT ===');
    console.log('Input:', unicodeTest);
    console.log('Output (cleanup):', cleanupText(unicodeTest));
}

// Hàm debug để xem Unicode codes của các ký tự trong chuỗi
function debugString(str) {
    console.log('=== DEBUG CHUỖI KÝ TỰ ===');
    console.log('Chuỗi:', str);
    console.log('Độ dài:', str.length);
    console.log('Chi tiết từng ký tự:');
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = char.charCodeAt(0);
        const unicode = 'U+' + code.toString(16).toUpperCase().padStart(4, '0');
        console.log(`${i + 1}. "${char}" - ${unicode} (${code})`);
    }
    
    console.log('\nSau khi xóa dấu nháy:', removeAllQuotes(str));
}

// Hàm test đặc biệt cho Unicode quotes
function testUnicodeQuotes() {
    const examples = [
        'Hello \u201CWorld\u201D',           // Unicode double quotes
        'It\u2019s \u2018amazing\u2019',         // Unicode single quotes  
        'Mixed \u201Cquotes\u201D and \u2018types\u2019', // Mixed Unicode
        'Regular "quotes" and \'apostrophe\'', // Regular quotes
        '\u201CStart\u201D and \u2018end\u2019',       // Various combinations
        'When My Wife Got Home I Asked, \u201CDo You Love Him\u201D \u2013 She Froze When I Said His Name' // Test case từ user
    ];
    
    console.log('=== TEST UNICODE QUOTES ===');
    examples.forEach((text, index) => {
        console.log(`${index + 1}. Input:  ${text}`);
        console.log(`   Output: ${removeAllQuotes(text)}`);
        console.log('');
    });
}

// Thêm sự kiện Enter để thực hiện xử lý
document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const resultText = document.getElementById('resultText');
    
    // Cập nhật stats khi người dùng nhập
    inputText.addEventListener('input', updateStats);
    
    inputText.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            cleanupMethod(); // Thay đổi từ removeQuotesMethod1 thành cleanupMethod
        }
    });
    
    // Thêm phím tắt Ctrl+C cho textarea kết quả
    resultText.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            copyToClipboard();
        }
    });
    
    // Thêm double-click để sao chép
    resultText.addEventListener('dblclick', function() {
        copyToClipboard();
    });
    
    // Thêm ví dụ mẫu
    inputText.placeholder = 'Ví dụ: Hello "World" and \'JavaScript\' with special@#$% chars...';
    
    console.log('🚀 Ứng dụng tối ưu hóa tên file đã sẵn sàng!');
    console.log('💡 Các lệnh console hữu ích:');
    console.log('   - demoAllMethods() - Demo tất cả phương pháp');
    console.log('   - testUnicodeQuotes() - Test Unicode quotes');
    console.log('   - debugString("your text") - Debug chuỗi ký tự');
    console.log('📝 Tính năng sao chép:');
    console.log('   - Nhấn nút "📋 Sao chép"');
    console.log('   - Double-click vào kết quả');
    console.log('   - Ctrl+C khi focus vào kết quả');
});

// Xuất các hàm để có thể sử dụng từ bên ngoài
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // Xóa dấu nháy
        removeAllQuotes,
        removeDoubleQuotes,
        removeSingleQuotes,
        removeQuotesWithSplit,
        removeQuotesWithLoop,
        removeQuotesWithFilter,
        
        // Xóa ký tự đặc biệt
        removeSpecialCharacters,
        removeTrailingPeriods,
        removeAllPeriods,
        removeSpecialAndTrailingPeriods,
        removeAll,
        cleanupText,
        convertToLowerCase,
        
        // UI utilities
        copyToClipboard,
        displayResult,
        
        // Debug
        debugString
    };
}