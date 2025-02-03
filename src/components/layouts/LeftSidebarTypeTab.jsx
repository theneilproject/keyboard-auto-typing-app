const LeftSidebarTypeTab = () => {
  // 예시로 15개의 메뉴 아이템 생성 (실제 데이터에 맞게 수정 가능)
  const menuItems = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    label: `Menu ${index + 1}`,
  }));

  return (
    <div className="left-sidebar">
      <div className="menu">
        {menuItems.map(item => (
          <button key={item.id} className="menu-button">
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebarTypeTab;