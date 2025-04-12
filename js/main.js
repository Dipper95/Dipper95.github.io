/**
 * 原型托管平台主脚本
 * 负责页面渲染和交互逻辑
 */

// 渲染项目列表
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    // 显示项目列表标题
    document.querySelector('h2').style.display = 'block';
    
    // 检查是否有置顶项目
    const pinnedProjects = projects.filter(project => project.isPinned);
    if (pinnedProjects.length > 0) {
        // 创建置顶区域
        const pinnedSection = document.createElement('div');
        pinnedSection.className = 'pinned-section';
        pinnedSection.id = 'pinned-projects';
        
        const sectionTitle = document.createElement('h3');
        sectionTitle.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2c-2.6 2.6-4.3 6.1-4.3 9.8 0 3.7 1.7 7.2 4.3 9.8l68.2 68.2c2.6 2.6 6.1 4.3 9.8 4.3 3.7 0 7.2-1.7 9.8-4.3l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z" fill="currentColor"/>
            </svg>
            置顶项目
        `;
        
        pinnedSection.appendChild(sectionTitle);
        
        const pinnedGrid = document.createElement('div');
        pinnedGrid.className = 'card-grid';
        pinnedSection.appendChild(pinnedGrid);
        
        // 渲染置顶项目
        pinnedProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            pinnedGrid.appendChild(projectCard);
        });
        
        // 将置顶区域添加到页面
        const projectsSection = document.getElementById('projects');
        projectsSection.insertBefore(pinnedSection, projectsSection.firstChild);
    }
    
    // 渲染未置顶项目
    const unpinnedProjects = projects.filter(project => !project.isPinned);
    unpinnedProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// 创建项目卡片
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `card ${project.isPinned ? 'pinned-card' : ''}`;
    card.setAttribute('data-color', project.color);
    card.setAttribute('data-id', project.id);
    
    card.innerHTML = `
        <button class="pin-button ${project.isPinned ? 'pinned' : ''}" title="${project.isPinned ? '取消置顶' : '置顶项目'}">
            <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2c-2.6 2.6-4.3 6.1-4.3 9.8 0 3.7 1.7 7.2 4.3 9.8l68.2 68.2c2.6 2.6 6.1 4.3 9.8 4.3 3.7 0 7.2-1.7 9.8-4.3l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z"/>
            </svg>
        </button>
        <div class="card-content">
            <h3>${project.name}</h3>
            <p>${project.versions.length} 个版本</p>
        </div>
    `;
    
    // 添加点击事件
    card.addEventListener('click', (event) => {
        if (!event.target.closest('.pin-button')) {
            renderVersions(project);
        }
    });
    
    // 添加置顶按钮事件
    const pinButton = card.querySelector('.pin-button');
    pinButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        // 切换置顶状态
        project.isPinned = !project.isPinned;
        
        // 更新按钮状态
        pinButton.classList.toggle('pinned');
        pinButton.title = project.isPinned ? '取消置顶' : '置顶项目';
        
        // 更新卡片状态
        card.classList.toggle('pinned-card');
        
        // 保存状态
        savePinnedStates();
        
        // 重新渲染项目列表
        clearProjectsSection();
        renderProjects();
    });
    
    return card;
}

// 清除项目区域
function clearProjectsSection() {
    const projectsSection = document.getElementById('projects');
    const pinnedSection = document.getElementById('pinned-projects');
    
    if (pinnedSection) {
        pinnedSection.remove();
    }
}

// 渲染版本列表
function renderVersions(project) {
    // 隐藏项目列表
    document.getElementById('projects').style.display = 'none';
    
    // 隐藏项目列表标题
    document.querySelector('h2').style.display = 'none';
    
    // 检查是否已存在版本列表，如果存在则移除
    const existingVersionsSection = document.getElementById(`versions-${project.id}`);
    if (existingVersionsSection) {
        existingVersionsSection.remove();
    }
    
    // 创建版本列表区域
    const versionsSection = document.createElement('section');
    versionsSection.id = `versions-${project.id}`;
    
    // 创建标题区域
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';
    
    // 创建可点击的标题区域
    const titleWithBackContainer = document.createElement('a');
    titleWithBackContainer.href = '#';
    titleWithBackContainer.className = 'title-with-back';
    titleWithBackContainer.addEventListener('click', (event) => {
        event.preventDefault();
        versionsSection.remove();
        document.getElementById('projects').style.display = 'block';
        document.querySelector('h2').style.display = 'block';
    });
    
    // 添加返回图标
    const backIcon = document.createElement('span');
    backIcon.className = 'back-icon';
    backIcon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
        </svg>
    `;
    
    // 添加标题
    const title = document.createElement('h2');
    title.textContent = project.name;
    title.className = 'version-title';
    
    // 将返回图标和标题添加到容器
    titleWithBackContainer.appendChild(backIcon);
    titleWithBackContainer.appendChild(title);
    titleContainer.appendChild(titleWithBackContainer);
    
    versionsSection.appendChild(titleContainer);
    
    // 检查是否有置顶版本
    const pinnedVersions = project.versions.filter(version => version.isPinned);
    if (pinnedVersions.length > 0) {
        // 创建置顶区域
        const pinnedSection = document.createElement('div');
        pinnedSection.className = 'pinned-section';
        
        const sectionTitle = document.createElement('h3');
        sectionTitle.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2c-2.6 2.6-4.3 6.1-4.3 9.8 0 3.7 1.7 7.2 4.3 9.8l68.2 68.2c2.6 2.6 6.1 4.3 9.8 4.3 3.7 0 7.2-1.7 9.8-4.3l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z" fill="currentColor"/>
            </svg>
            置顶版本
        `;
        
        pinnedSection.appendChild(sectionTitle);
        
        const pinnedGrid = document.createElement('div');
        pinnedGrid.className = 'card-grid';
        pinnedSection.appendChild(pinnedGrid);
        
        // 渲染置顶版本
        pinnedVersions.forEach(version => {
            const versionCard = createVersionCard(version, project);
            pinnedGrid.appendChild(versionCard);
        });
        
        versionsSection.appendChild(pinnedSection);
    }
    
    // 创建版本卡片网格
    const versionsGrid = document.createElement('div');
    versionsGrid.className = 'card-grid';
    
    // 渲染未置顶版本
    const unpinnedVersions = project.versions.filter(version => !version.isPinned);
    unpinnedVersions.forEach(version => {
        const versionCard = createVersionCard(version, project);
        versionsGrid.appendChild(versionCard);
    });
    
    versionsSection.appendChild(versionsGrid);
    
    // 将版本列表添加到页面
    document.querySelector('.container').appendChild(versionsSection);
}

// 创建版本卡片
function createVersionCard(version, project) {
    const card = document.createElement('div');
    card.className = `card version-card ${version.isPinned ? 'pinned-card' : ''}`;
    card.setAttribute('data-color', project.color);
    
    card.innerHTML = `
        <button class="pin-button ${version.isPinned ? 'pinned' : ''}" title="${version.isPinned ? '取消置顶' : '置顶版本'}">
            <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7-215.4 215.2c-2.6 2.6-4.3 6.1-4.3 9.8 0 3.7 1.7 7.2 4.3 9.8l68.2 68.2c2.6 2.6 6.1 4.3 9.8 4.3 3.7 0 7.2-1.7 9.8-4.3l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8z"/>
            </svg>
        </button>
        <div class="card-content">
            <h3>${version.id}</h3>
            <div class="version-description">${version.description}</div>
            <div class="version-info">最后更新：${version.updateDate}</div>
            <a href="${version.url}" target="_blank" class="view-prototype">
                <span>查看原型</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
            </a>
        </div>
    `;
    
    // 添加置顶按钮事件
    const pinButton = card.querySelector('.pin-button');
    pinButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        // 切换置顶状态
        version.isPinned = !version.isPinned;
        
        // 更新按钮状态
        pinButton.classList.toggle('pinned');
        pinButton.title = version.isPinned ? '取消置顶' : '置顶版本';
        
        // 更新卡片状态
        card.classList.toggle('pinned-card');
        
        // 保存状态
        savePinnedStates();
        
        // 重新渲染版本列表
        renderVersions(project);
    });
    
    return card;
}

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
}); 