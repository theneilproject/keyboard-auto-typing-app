// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use enigo::*;
use std::{thread, time::Duration};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn read_binary_file(path: String) -> Result<Vec<u8>, String> {
    std::fs::read(path).map_err(|e| e.to_string())
}

#[tauri::command]
async fn write_binary_file(path: String, data: Vec<u8>) -> Result<(), String> {
    std::fs::write(path, data).map_err(|e| e.to_string())
}

#[tauri::command]
fn type_command(command: &str) {
    let mut enigo = Enigo::new(&Settings::default()).unwrap();

    // 약간의 딜레이를 주어 터미널로 포커스를 이동할 시간을 줍니다.
    thread::sleep(Duration::from_secs(2));

    // 명령어 입력
    enigo.text(command);


    // Enter 키 입력
    enigo.key(Key::Return, Direction::Press);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            read_binary_file,
            write_binary_file,
            type_command
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
