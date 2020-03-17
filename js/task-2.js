const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = inventory.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function(itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action.call(inventory, itemName);
  };
  
  invokeInventoryAction('Medkit', inventory.add);
  // Invoking action on Medkit
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction('Gas mask', inventory.remove);
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  
  console.log(inventory.items); // ['Knife', 'Medkit']



  // const inventory = {
  //   items: ['Монорельса', 'Фильтр'],
  //   add(itemName) {
  //     this.items.push(itemName);
  //   },
  //   remove(itemName) {
  //     this.items = this.items.filter(item => item !== itemName);
  //   },
  // };
  
  // const invokeInventoryOperation = function(itemName, inventoryAction) {
  //   console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  //   inventoryAction.call(inventory, itemName);
  // };
  
  // invokeInventoryOperation('Аптечка', inventory.add);
  // // Invoking add opeartion on Аптечка
  
  // console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']
  
  // invokeInventoryOperation('Фильтр', inventory.remove);
  // // Invoking remove opeartion on Фильтр
  
  // console.log(inventory.items); // ['Монорельса', 'Аптечка']