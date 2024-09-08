import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import pluginStylistic from '@stylistic/eslint-plugin'
import tsEslint from 'typescript-eslint'

// Import globs
import globs from './src/globs.js'

export default tsEslint.config(
  {
    ignores: globs.GLOBS_EXCLUDE,
  },

  // eslint
  {
    files: [
      globs.GLOB_JS,
      globs.GLOB_TS,
    ],
    rules: {
      'no-unexpected-multiline': [
        'error',
      ],
    },
  },

  // @stylistic/eslint-plugin
  {
    files: [
      globs.GLOB_JS,
      globs.GLOB_TS,
      globs.GLOB_VUE,
    ],
    plugins: {
      '@stylistic': pluginStylistic,
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    rules: {
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      '@stylistic/eol-last': [
        'error',
      ],
      '@stylistic/function-call-spacing': [
        'error',
        'never',
      ],
      '@stylistic/indent': [
        'error',
        2,
      ],
      '@stylistic/no-tabs': [
        'error',
      ],
      '@stylistic/no-trailing-spaces': [
        'error',
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      '@stylistic/quote-props': [
        'error',
        'as-needed',
      ],
      '@stylistic/semi': [
        'error',
        'never',
        {
          beforeStatementContinuationChars: 'never',
        },
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
    },
  },

  // eslint-plugin-vue
  ...pluginVue.configs['flat/recommended'],
  {
    files: [
      globs.GLOB_VUE,
    ],
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslint.parser,
      },
    },
    rules: {
      'vue/attributes-order': [
        'error',
        {
          alphabetical: true,
        },
      ],
      'vue/component-tags-order': [
        'error',
        {
          order: [
            'script',
            'template',
            'style',
          ],
        },
      ],
      'vue/define-macros-order': [
        'error',
        {
          order: [
            'defineOptions',
            'defineModel',
            'defineProps',
            'defineEmits',
            'defineSlots',
          ],
        },
      ],
      'vue/first-attribute-linebreak': [
        'error',
      ],
      'vue/html-closing-bracket-newline':[
        'error',
      ],
      'vue/html-indent': [
        'error',
        2,
      ],
      'vue/max-attributes-per-line': [
        'error',
      ],
      'vue/multi-word-component-names': 'off',
      'vue/padding-line-between-blocks': [
        'error',
        'always',
      ],
    },
  }
)
