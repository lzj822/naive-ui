# Size
```html
<n-dropdown
  placement="bottom-start"
  trigger="click"
  size="small"
  :width="160"
  :submenu-width="160"
>
  <template v-slot:activator>
    <div>menu</div>
  </template>
  <n-dropdown-item>
    item1
  </n-dropdown-item>
  <n-dropdown-item>
    item2
  </n-dropdown-item>
  <n-dropdown-divider />
  <n-dropdown-item>
    item3
  </n-dropdown-item>
  <n-dropdown-submenu>
    <template v-slot:activator>
      submenu
    </template>
    <n-dropdown-item>
      item4
    </n-dropdown-item>
    <n-dropdown-divider />
    <n-dropdown-item>
      item5
    </n-dropdown-item>
    <n-dropdown-submenu>
      <template v-slot:activator>
        submenu2
      </template>
      <n-dropdown-item>
        item6
      </n-dropdown-item>
      <n-dropdown-item>
        item7
      </n-dropdown-item>
    </n-dropdown-submenu>
  </n-dropdown-submenu>
</n-dropdown>
<n-dropdown
  placement="bottom-start"
  trigger="click"
  size="large"
>
  <template v-slot:activator>
    <div>menu</div>
  </template>
  <n-dropdown-item>
    item1
  </n-dropdown-item>
  <n-dropdown-item>
    item2
  </n-dropdown-item>
  <n-dropdown-divider />
  <n-dropdown-item>
    item3
  </n-dropdown-item>
  <n-dropdown-submenu>
    <template v-slot:activator>
      submenu
    </template>
    <n-dropdown-item>
      item4
    </n-dropdown-item>
    <n-dropdown-divider />
    <n-dropdown-item>
      item5
    </n-dropdown-item>
    <n-dropdown-submenu>
      <template v-slot:activator>
        submenu2
      </template>
      <n-dropdown-item>
        item6
      </n-dropdown-item>
      <n-dropdown-item>
        item7
      </n-dropdown-item>
    </n-dropdown-submenu>
  </n-dropdown-submenu>
</n-dropdown>
<n-dropdown
  placement="bottom-start"
  trigger="click"
  size="huge"
>
  <template v-slot:activator>
    <div>menu</div>
  </template>
  <n-dropdown-item>
    item1
  </n-dropdown-item>
  <n-dropdown-item>
    item2
  </n-dropdown-item>
  <n-dropdown-divider />
  <n-dropdown-item>
    item3
  </n-dropdown-item>
  <n-dropdown-submenu>
    <template v-slot:activator>
      submenu
    </template>
    <n-dropdown-item>
      item4
    </n-dropdown-item>
    <n-dropdown-divider />
    <n-dropdown-item>
      item5
    </n-dropdown-item>
    <n-dropdown-submenu>
      <template v-slot:activator>
        submenu2
      </template>
      <n-dropdown-item>
        item6
      </n-dropdown-item>
      <n-dropdown-item>
        item7
      </n-dropdown-item>
    </n-dropdown-submenu>
  </n-dropdown-submenu>
</n-dropdown>
```