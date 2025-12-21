import mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0 && !key.startsWith('#')) {
        let value = valueParts.join('=').trim();
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key.trim()] = value;
      }
    });
  }
}

loadEnv();
const MONGODB_URI = process.env.MONGODB_URI || '';

const arabicHistory = `التعريف

Curva Sud Milano هي المدرج الجنوبي لملعب سان سيرو (Stadio Giuseppe Meazza)، وتُعد المعقل التاريخي والرئيسي لجماهير AC Milan الألتراس. لا تمثل Curva Sud مجموعة واحدة فقط، بل هي كيان موحّد يضم عدة مجموعات ألتراس تتقاسم نفس الهوية، القيم، والولاء المطلق للنادي.

Curva Sud معروفة عالميًا بشغفها، تنظيمها الصارم، وإبداعاتها البصرية التي حوّلت المدرج إلى مسرح فني وثقافي، حيث تمتزج كرة القدم بالهوية، والانتماء، والذاكرة الجماعية.

التاريخ والنشأة

بدأت ثقافة الألتراس في Curva Sud خلال أواخر الستينات وبداية السبعينات، مع ظهور مجموعات تاريخية مثل:

Fossa dei Leoni (1968) – أول وأشهر مجموعة ألتراس في تاريخ ميلان

Brigate Rossonere

Commandos Tigre

Ultras Milano

ورغم حل بعض هذه المجموعات أو اندماجها، بقيت Curva Sud محافظة على روحها، إلى أن تشكّل الكيان الحديث تحت اسم Curva Sud Milano، الذي يجمع مختلف الفصائل تحت راية واحدة.

الأنشطة الثقافية والفنية

Curva Sud Milano تُعد من رواد الإبداع البصري في عالم الألتراس، وتشتهر بـ:

تيفوهات ضخمة ومعقّدة تغطي كامل المدرج

استعمال دقيق للألوان (الأحمر والأسود)

رسائل تاريخية، رياضية، وأحيانًا اجتماعية

تنسيق مثالي بين اللافتات، الأعلام، والدخان

كل تيفو هو عمل جماعي يستغرق أسابيع من التحضير، ويعكس الذاكرة التاريخية للنادي ومكانته الأوروبية.

المباريات الأيقونية

تتجلّى قوة Curva Sud خصوصًا في:

ديربي ديلا مادونينا ضد إنتر ميلان

مباريات دوري أبطال أوروبا

النهائيات والمباريات المصيرية

في هذه المناسبات، يتحوّل سان سيرو إلى ساحة أسطورية، حيث تلعب الجماهير دور اللاعب رقم 12، بل وأحيانًا اللاعب الأول.

التنظيم والقيم

Curva Sud تقوم على مبادئ أساسية:

الولاء غير المشروط لـ AC Milan

الوحدة فوق كل شيء: المدرج قبل الأفراد

الاستقلالية عن إدارة النادي

الذاكرة التاريخية واحترام التقاليد

الانضباط والتنظيم الصارم

القيادة تتم عبر الـ Capo الذي يقود الأهازيج وينسق الحركة الجماعية، مع احترام التسلسل الداخلي لكل مجموعة.

التأثير العالمي

Curva Sud Milano تُعتبر مدرسة حقيقية في ثقافة الألتراس، وقد ألهمت مجموعات عديدة في:

أوروبا

شمال إفريقيا

أمريكا اللاتينية

تيفوهاتها وصورها تُتداول عالميًا، وأسلوبها يُدرّس ضمن ثقافة المدرجات الحديثة.

الخلاصة

Curva Sud Milano ليست مجرد مدرج، بل هوية، ذاكرة، وثقافة مقاومة. هي صوت ميلان الحقيقي، ومرآة تاريخه، وجسر يربط الماضي بالحاضر. في Curva Sud، كرة القدم ليست لعبة، بل أسلوب حياة.`;

async function updateCurvaSudArabic() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const UltraGroup = mongoose.connection.collection('ultragroups');

    const result = await UltraGroup.updateOne(
      { slug: 'curva-sud-milano' },
      {
        $set: {
          'historyTranslations.ar': arabicHistory,
          motto: 'القلب النابض لميلان',
          'mottoTranslations.ar': 'القلب النابض لميلان',
        }
      }
    );

    if (result.matchedCount > 0) {
      console.log('Curva Sud Milano Arabic content updated!');
      console.log('Content length:', arabicHistory.length, 'characters');
    } else {
      console.log('Group not found');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateCurvaSudArabic();
