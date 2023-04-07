using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ECommerceDbContext>(options =>
    options.UseInMemoryDatabase(databaseName: "eCommerceDb"));
builder.Services.AddScoped<IRepository<Customer>, BaseRepository<Customer>>();
builder.Services.AddScoped<IRepository<Shop>, BaseRepository<Shop>>();
builder.Services.AddScoped<IRepository<Product>, BaseRepository<Product>>();
 // register order service with its dependencies
builder.Services.AddScoped<OrderService>();

builder.Services.AddAutoMapperProfiles();
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//CORS
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("AllowAll");

app.Run();
