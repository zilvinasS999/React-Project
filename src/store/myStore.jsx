import { create } from 'zustand';

const useStore = create((set) => ({
  inventory: {},

  items: [
    {
      output: {
        emoji: '🗡️',
        name: 'Enchanted Sword',
      },
      ingredients: [
        {
          emoji: '🗡️',
          name: 'Basic Sword',
        },
        {
          emoji: '🔮',
          name: 'Magic Crystal',
        },
      ],
    },
    {
      output: {
        emoji: '🛡️',
        name: 'Reinforced Shield',
      },
      ingredients: [
        {
          emoji: '🛡️',
          name: 'Basic Shield',
        },
        {
          emoji: '🪓',
          name: 'Iron Axe',
        },
      ],
    },
    {
      output: {
        emoji: '🔮',
        name: 'Wand of Fire',
      },
      ingredients: [
        {
          emoji: '🔮',
          name: 'Magic Wand',
        },
        {
          emoji: '🍖',
          name: 'Dragon Scale',
        },
      ],
    },
    {
      output: {
        emoji: '🏹',
        name: 'Longbow',
      },
      ingredients: [
        {
          emoji: '🏹',
          name: 'Shortbow',
        },
        {
          emoji: '👢',
          name: 'Leather Boots',
        },
      ],
    },
    {
      output: {
        emoji: '🪓',
        name: 'Great Axe',
      },
      ingredients: [
        {
          emoji: '🪓',
          name: 'Axe',
        },
        {
          emoji: '👑',
          name: 'Golden Crown',
        },
      ],
    },
    {
      output: {
        emoji: '👢',
        name: 'Boots of Speed',
      },
      ingredients: [
        {
          emoji: '👢',
          name: 'Boots',
        },
        {
          emoji: '🍖',
          name: 'Swift Feather',
        },
      ],
    },
    {
      output: {
        emoji: '👑',
        name: 'Royal Crown',
      },
      ingredients: [
        {
          emoji: '👑',
          name: 'Crown',
        },
        {
          emoji: '🔮',
          name: 'Elder Gem',
        },
      ],
    },
    {
      output: {
        emoji: '🍖',
        name: 'Feast',
      },
      ingredients: [
        {
          emoji: '🍖',
          name: 'Meat',
        },
        {
          emoji: '🛡️',
          name: 'Shield',
        },
      ],
    },
  ],

  craftItem: (itemName) =>
    set((state) => {
      const recipe = state.items.find((item) => item.output.name === itemName);

      if (recipe) {
        const allIngredientsAvailable = recipe.ingredients.every(
          (ingredient) => state.inventory[ingredient.name]
        );

        if (allIngredientsAvailable) {
          recipe.ingredients.forEach((ingredient) => {
            state.inventory[ingredient.name]--;
          });

          if (!state.inventory[itemName]) {
            state.inventory[itemName] = 0;
          }
          state.inventory[itemName]++;

          return { ...state, inventory: { ...state.inventory } };
        } else {
          console.log('Not enough ingredients');
        }
      } else {
        console.log('Recipe does not exist');
      }
    }),
}));

export default useStore;
