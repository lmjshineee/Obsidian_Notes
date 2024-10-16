# 生成数据表

#### pandas 库

pandas 是一个强大的数据分析库，提供了数据结构和数据分析工具，使得在Python中进行数据处理变得更加简单和高效。pandas 主要提供了两种数据结构：Series 和 DataFrame。

- Series：类似于一维数组的对象，由一组数据和与之相关的索引组成。
- DataFrame：类似于二维表格的数据结构，由多个 Series 组成，每个 Series 表示一列数据。

pandas 提供了丰富的函数和方法，用于数据的导入、清洗、转换、分析和可视化。通过 pandas，用户可以轻松地处理各种数据格式，如CSV、Excel、SQL数据库等，进行数据筛选、聚合、合并等。

#### NumPy 库

NumPy（Numerical Python）是Python中用于科学计算的一个重要库，提供了多维数组对象（例如数组）和许多用于操作数组的函数。NumPy的核心是ndarray（N-dimensional array）对象，它是一个具有相同类型和大小的元素的多维数组。

NumPy库提供了以下功能和特点：

- 强大的N维数组对象
- 其他派生对象（如掩码数组、矩阵等）
- 广播功能函数
- 整合C/C++/Fortran代码的工具
- 线性代数、傅立叶变换和随机数生成等功能

NumPy是许多其他科学计算库的基础，如pandas、SciPy等，因此在数据处理和科学计算领域中被广泛应用。通过NumPy，用户可以高效地进行数组操作、数学运算和线性代数计算。

在Python中，要导入pandas库和numpy库，可以使用以下代码：

```Python
import pandas as pd
import numpy as np
```

这样就可以方便地使用pandas库和numpy库中的函数和工具来进行数据导入和处理。导入这两个库后，可以使用它们提供的丰富功能来处理各种数据类型。

## 导入数据表

1. 从CSV文件导入数据表：

```Python
import pandas as pd
data = pd.read_csv('file.csv')
```

1. 从Excel文件导入数据表：

```Python
import pandas as pd
data = pd.read_excel('file.xlsx')
```

1. 从SQL数据库导入数据表：

```Python
import pandas as pd
import sqlite3
conn = sqlite3.connect('database.db')
query = "SELECT * FROM table"
data = pd.read_sql(query, conn)
```

## 创建数据表

通过直接写入数据来生成数据表，可以使用pandas库中的DataFrame对象。

数据表一共有6行数据，每行有6个字段。在数据中我们特意设置了一些NA值和有问题的字段，例如包含空格等。后面将在数据清洗步骤进行处理。后面我们将统一以DataFrame的简称df来命名数据表。

```Python
df = pd.DataFrame({"id":[1001,1002,1003,1004,1005,1006],
"date":pd.date_range('20130102', periods=6),
"city":['Beijing ', 'SH', ' guangzhou ', 'Shenzhen', 'shanghai', 'BEIJING '],
"age":[23,44,54,32,34,32],
"category":['100-A','100-B','110-A','110-C','210-A','130-F'],
"price":[1200,np.nan,2133,5433,np.nan,4432]},
columns =['id','date','city','category','age','price'])

#输出表
print(df)
```

运行后，已经成功创建了一个名为 df 的DataFrame，其中包含了id、date、city、age、category和price等列。这个DataFrame包含了一些样本数据，如下所示：

|      | id   | date       | city      | category | age  | price  |
| :--- | :--- | :--------- | :-------- | :------- | :--- | :----- |
| 0    | 1001 | 2013-01-02 | Beijing   | 100-A    | 23   | 1200.0 |
| 1    | 1002 | 2013-01-03 | SH        | 100-B    | 44   | NaN    |
| 2    | 1003 | 2013-01-04 | guangzhou | 110-A    | 54   | 2133.0 |
| 3    | 1004 | 2013-01-05 | Shenzhen  | 110-C    | 32   | 5433.0 |
| 4    | 1005 | 2013-01-06 | shanghai  | 210-A    | 34   | NaN    |
| 5    | 1006 | 2013-01-07 | BEIJING   | 130-F    | 32   | 4432.0 |

# 数据表检查

对数据表进行检查是非常重要的，可以帮助我们了解数据的质量和结构，发现潜在的问题并进行必要的处理。

#### 数据表的维度

数据表的维度通常指的是数据表的行数和列数，也可以称为数据表的形状（shape）。在pandas中，可以通过DataFrame的shape属性来获取数据表的维度信息。行数表示数据表中的样本数量，列数表示数据表中的特征数量。以下是如何获取数据表的维度信息：

```Python
# 获取数据表的维度信息
rows, cols = df.shape
print("数据表的维度为：{} 行 x {} 列".format(rows, cols))
```

通过上述代码，可以获取数据表df的行数和列数，从而了解数据表的整体大小和结构。这个信息对于数据分析和处理非常重要，可以帮助我们更好地理解数据表的规模和特征数量。

1. `df.shape`：这是DataFrame对象的一个属性，用于获取数据表的维度信息。它返回一个元组，元组的第一个元素表示数据表的行数，第二个元素表示数据表的列数。
2. `rows, cols = df.shape`：这一行代码将元组中的第一个元素（行数）赋值给变量rows，将第二个元素（列数）赋值给变量cols。
3. `print("数据表的维度为：{} 行 x {} 列".format(rows, cols))`：这一行代码使用字符串格式化，将获取到的行数和列数插入到字符串中，以便打印出数据表的维度信息，形如“数据表的维度为：行数 行 x 列数 列”。

`.format(rows, cols)` 是一个字符串格式化方法，用于将变量的值插入到字符串中。在这个方法中，`{}` 是占位符，`format()` 方法中的参数会按顺序替换这些占位符。

- `{}`：在字符串中的这个占位符表示将在这里插入一个值。
- `format(rows, cols)`：这个部分是调用字符串的 `format()` 方法，其中 `rows` 和 `cols` 是要插入到字符串中的变量值。

在这种情况下，`format(rows, cols)` 将会把 `rows` 的值插入到第一个 `{}` 中，`cols` 的值插入到第二个 `{}` 中，从而形成一个完整的字符串，用于打印数据表的维度信息。这种字符串格式化方法使得我们可以方便地将变量值插入到字符串中，以便进行输出或展示。

#### 查看数据表的基本信息

要查看数据表的基本信息，包括列名、非空值数量、数据类型等，可以使用DataFrame的`info()`方法。

```Python
print(df.info())
```

通过这行代码，您可以查看数据表的基本信息，包括每列的名称、非空值数量、数据类型等。

```Python
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 6 entries, 0 to 5
Data columns (total 6 columns):
 #   Column    Non-Null Count  Dtype         
---  ------    --------------  -----         
 0   id        6 non-null      int64         
 1   date      6 non-null      datetime64[ns]
 2   city      6 non-null      object        
 3   category  6 non-null      object        
 4   age       6 non-null      int64         
 5   price     4 non-null      float64       
dtypes: datetime64[ns](1), float64(1), int64(2), object(2)
memory usage: 420.0+ bytes
```

这段信息是通过调用DataFrame的`info()`方法得到的数据表信息摘要，提供了关于数据表的一些重要信息。

1. `<class 'pandas.core.frame.DataFrame'>`：这表示数据类型，表明这是一个pandas DataFrame对象。
2. `RangeIndex: 6 entries, 0 to 5`：这说明数据表有6行数据，行索引范围是从0到5。
3. `Data columns (total 6 columns):`：这表示数据表总共有6列。
4. `#`、`Column`、`Non-Null Count`、`Dtype`：这些是数据表信息的表头，分别表示序号、列名、非空值数量和数据类型。
5. `---`：这一行是分隔符，用于区分表头和数据。
6. `id`, `date`, `city`, `category`, `age`, `price`：这些是数据表的列名。
7. `6 non-null`, `4 non-null`：这表示每列中非空值的数量，即该列中有多少个非空值。
8. `int64`, `datetime64[ns]`, `object`, `float64`：这些是数据表中每列的数据类型，分别表示整数、日期时间、对象（字符串）和浮点数。`datetime64[ns]` 是Pandas中用于表示日期时间数据类型的一种格式。在这个格式中，`datetime64` 表示日期时间类型，`[ns]` 表示精度为纳秒（nanoseconds）。
9. `memory usage: 420.0+ bytes`：这表示数据表占用的内存大小，单位为字节。

#### 查看数据格式

要查看数据表中每列的数据格式（数据类型），可以使用DataFrame的`dtypes`属性。这个属性会返回一个Series，其中包含数据表每列的数据类型。

```Python
print(df.dtypes)
```

通过这行代码，可以查看数据表中每列的数据格式，包括整数、浮点数、字符串、日期时间等不同类型。

```Python
id                   int64
date        datetime64[ns]
city                object
category            object
age                  int64
price              float64
dtype: object
```

在数据表信息中，`dtype: object` 表示该列的数据类型是对象类型，通常用于存储字符串数据。对象类型是Pandas中的一种通用数据类型，可以存储各种Python对象，包括字符串、混合类型等。当数据表中的列包含字符串数据或混合类型数据时，Pandas会将这些列的数据类型识别为对象类型。

在数据分析中，对象类型的列通常用于存储文本数据、类别数据或其他不适合用数值类型表示的数据。需要注意的是，对象类型的列在一些情况下可能会占用较多的内存，因此在数据处理和分析过程中，可以根据实际情况考虑是否需要将对象类型转换为其他更适合的数据类型。

若要查看数据表中单列的数据格式（数据类型），可以直接通过列名索引的方式获取该列，并使用`dtype`属性查看该列的数据类型。假设我们要查看名为`city`的列的数据格式：

```Python
print(df['city'].dtype)
```

通过这行代码，您可以查看数据表中名为`city`的列的数据格式，即该列的数据类型。

#### 查看空值

要查看数据表中的空值情况，可以使用DataFrame的`isnull()`方法结合`sum()`方法。这样可以得到每列中空值的数量。以下是如何查看数据表中空值情况的示例代码：

```Python
print(df.isnull())
print(df.isnull().sum())
```

是`isnull()` 是Pandas中用于检查空值（缺失值）的函数。当应用于DataFrame或Series对象时，`isnull()` 方法会返回一个布尔值的DataFrame或Series，其中每个元素为True表示该位置是空值，为False表示该位置不是空值。

```Python
     id   date   city  category    age  price
0  False  False  False     False  False  False
1  False  False  False     False  False   True
2  False  False  False     False  False  False
3  False  False  False     False  False  False
4  False  False  False     False  False   True
5  False  False  False     False  False  False

# 个数
id          0
date        0
city        0
category    0
age         0
price       2
```

在Pandas中，空值通常表示为NaN（Not a Number），这是一种特殊的数据类型，用于表示缺失值。通过使用`isnull()` 方法，我们可以快速检查数据表中哪些位置包含空值，以便进行后续的数据处理和清洗操作。

要检查特定列中的空值情况，可以使用DataFrame的`isnull()`方法结合索引特定列的方法。假设我们要检查名为`city`的列中的空值情况：

```Python
print(df['city'].isnull().sum())
```

通过这行代码，可以查看数据表中名为`city`的列中包含的空值数量。如果结果为0，则表示该列中没有空值；如果结果大于0，则表示该列中包含空值。

#### 查看唯一值

在Pandas中，`unique()` 是用于查看数据表中特定列的唯一值的函数。当应用于DataFrame或Series对象的某一列时，`unique()` 方法会返回该列中所有唯一值的数组，即去除重复值后的数值列表。

假设我们要查看名为`city`的列中的唯一值：

```Python
print(df['city'].unique())
```

通过这行代码，可以查看数据表中名为`city`的列中所有唯一的城市名称。