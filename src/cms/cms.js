/**
 * Created  on 31/3/18
 */
import CMS from 'netlify-cms'

import ArticlePreview from './preview-templates/ArticlePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('blog', ArticlePreview)
